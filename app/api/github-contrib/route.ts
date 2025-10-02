import { NextResponse } from 'next/server';
import { personalInfo } from '@/lib/data';

export const revalidate = 86400; // cache this route for 24h

const GQL_ENDPOINT = 'https://api.github.com/graphql';

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

function getLoginFromProfile(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/').filter(Boolean);
    return parts[0] || null;
  } catch {
    return null;
  }
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: 'GITHUB_TOKEN env var is missing. Add it to .env.local and restart the dev server.' },
      { status: 500 }
    );
  }

  const login = getLoginFromProfile(personalInfo.github) || 'arfprince';

  const body = JSON.stringify({ query: QUERY, variables: { login } });

  const res = await fetch(GQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    // cache GitHub response for 24h on the server
    next: { revalidate: 86400 },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }

  const json = await res.json();

  if (json?.errors?.length) {
    const msg = json.errors.map((e: any) => e.message).join('; ');
    return NextResponse.json({ error: msg, raw: json.errors }, { status: 500 });
  }

  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    return NextResponse.json({ error: 'No contribution data available' }, { status: 500 });
  }

  // Flatten into an array of days { date, count, color }
  const days = (calendar.weeks as any[])
    .flatMap((w: any) => w.contributionDays)
    .map((d: any) => ({
      date: d.date as string,
      count: d.contributionCount as number,
      color: d.color as string,
    }));

  return NextResponse.json({ days, total: calendar.totalContributions, login });
}
