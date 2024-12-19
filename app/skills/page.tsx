import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skills = {
    "Programming Languages": ["C", "C++"],
    "Web Technology": ["HTML", "CSS", "Tailwind", "JavaScript"],
    "Database": ["MySQL"],
    "Other Skills": [
      "Classical Algorithms",
      "Data Structures",
      "Object Oriented Programming"
    ],
    "Version Control": ["Git/Github"]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

