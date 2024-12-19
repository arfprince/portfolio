import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <Card>
        <CardHeader>
          <CardTitle>B.Sc. in Computer Science and Engineering</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-lg">International Islamic University Chittagong</p>
            <p className="text-gray-600 dark:text-gray-400">01/2021 – 12/2024</p>
            <p className="font-medium">CGPA - 3.3 out of 4</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

