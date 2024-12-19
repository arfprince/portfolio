import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Activities() {
  const activities = [
    {
      title: "Teaching Assistant",
      organization: "International Islamic University Chittagong",
      period: "June 2023 — June 2024",
      details: ["Course: C Programming II", "Course: Competitive Programming I"]
    },
    {
      title: "Competitive Programming Trainer",
      organization: "IIUC Competitive Programming Society",
      period: "June 2023 – December 2023"
    },
    {
      title: "Competitive Programming Mentor",
      organization: "IIUC Competitive Programming Society",
      period: "Jan 2023-June 2023"
    },
    {
      title: "Bootcamp Coordinator",
      organization: "IIUC Competitive Programming Society",
      period: "January 2024 — present"
    },
    {
      title: "Campus Ambassador",
      period: "February 2022 – December 2024"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Activities</h1>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {activity.organization && (
                  <p className="text-lg">{activity.organization}</p>
                )}
                <p className="text-gray-600 dark:text-gray-400">{activity.period}</p>
                {activity.details && (
                  <ul className="list-disc list-inside">
                    {activity.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

