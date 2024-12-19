import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <Card>
        <CardHeader>
          <CardTitle>DevOps Intern</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-lg">AppifyLab</p>
              <p className="text-gray-600 dark:text-gray-400">November 2024 – present | Sylhet, Bangladesh</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Working on Docker, Nginx, SSL integration for automated deployments using Docker Compose and Swarm and CI/CD pipelines using Github Action</li>
              <li>Hands-on with Linux, Bash Scripting, AWS EC2</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

