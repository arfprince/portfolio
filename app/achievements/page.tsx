import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Achievements() {
  const achievements = {
    "National Collegiate Programming Contest (NCPC)": [
      "Ranked 162th out of 195 teams in the NCPC 2023"
    ],
    "Inter University Programming Contest (IUPC)": [
      "42th among 98 teams at SEC Inter University JUPC 2022",
      "36th in PU IUPC Divisional 2024",
      "36th out of 197 teams in ICT Division presents – 7th DRMC International Tech Carnival 2024",
      "36th in 15th IIUC Inter University Programming Contest 2023[DIVISIONAL]"
    ],
    "Intra University Programming Contest": [
      "4th in CCE Inter-Department Programming Contest",
      "5th in IIUC Intra-University Programming Contest",
      "Rising Star IIUC Intra University Junior Programming Contest 2022",
      "2nd IIUC Intra University Junior Programming Contest 2022",
      "9th out of 43 teams in IIUC Intra University Programming Contest 2022"
    ],
    "Competitive Programming": [
      "Codeforce - ARFprince, Max Rating - 1284",
      "Codechef - arfprince, Max Rating - 1603",
      "Atcoder - ARFprince, Max Rating - 599",
      "Leetcode - 100+ problems solved",
      "2000+ problems solved across platforms",
      "Participated in 250+ Programming Contests"
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>
      <div className="space-y-6">
        {Object.entries(achievements).map(([category, items]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {items.map((achievement) => (
                  <li key={achievement} className="text-gray-600 dark:text-gray-400">
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

