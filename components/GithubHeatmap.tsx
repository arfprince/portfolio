'use client';

import { useEffect, useMemo, useState } from 'react';

type Day = { date: string; count: number; color: string };

type ApiResponse = { days: Day[]; total?: number; login?: string; error?: string };

export default function GithubHeatmap() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/github-contrib', { cache: 'no-store' });
        const json: ApiResponse = await res.json();
        if (!res.ok) throw new Error(json?.error || 'Failed to load');
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Track theme to pick GitHub's official palette for light/dark
  useEffect(() => {
    const html = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setIsDark(html.classList.contains('dark') || media.matches);
    update();
    media.addEventListener('change', update);
    const mo = new MutationObserver(update);
    mo.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => {
      media.removeEventListener('change', update);
      mo.disconnect();
    };
  }, []);

  const columns = useMemo(() => {
    const days = data?.days ?? [];
    const cols: Day[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      cols.push(days.slice(i, i + 7));
    }
    return cols;
  }, [data?.days]);

  // Compute dynamic thresholds to map counts to 4 intensity levels
  const thresholds = useMemo(() => {
    const counts = (data?.days ?? [])
      .map((d) => d.count)
      .filter((c) => c > 0)
      .sort((a, b) => a - b);
    if (counts.length === 0) return { t1: 1, t2: 2, t3: 3 };
    const pick = (p: number) => counts[Math.floor(p * (counts.length - 1))];
    return { t1: pick(0.25), t2: pick(0.5), t3: pick(0.75) };
  }, [data?.days]);

  if (error) {
    return <div className="text-xs text-red-400">{error}</div>;
  }
  if (!data) {
    return <div className="h-16 w-full animate-pulse rounded bg-gray-800/30" />;
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-gray-400">GitHub contributions (last year)</p>
        {typeof data.total === 'number' && (
          <p className="text-xs text-gray-400">Total: {data.total}</p>
        )}
      </div>
      <div className="w-full overflow-x-auto">
        <div className="inline-flex gap-[2px] min-w-full" style={{ minWidth: 'fit-content' }}>
          {columns.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[2px]">
              {week.map((d) => {
                const paletteLight = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
                const paletteDark = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                const palette = isDark ? paletteDark : paletteLight;
                const { t1, t2, t3 } = thresholds;
                let level = 0;
                if (d.count > 0) {
                  level = d.count <= t1 ? 1 : d.count <= t2 ? 2 : d.count <= t3 ? 3 : 4;
                }
                const bg = palette[level];
                return (
                  <div
                    key={d.date}
                    title={`${d.date}: ${d.count} contributions`}
                    aria-label={`${d.date}: ${d.count} contributions`}
                    className="h-[8px] w-[8px] rounded-[2px] flex-shrink-0"
                    style={{ backgroundColor: bg, border: '1px solid rgba(0,0,0,0.1)' }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}