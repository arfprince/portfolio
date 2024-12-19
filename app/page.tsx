import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/me.jpeg"
              alt="Md Armanur Rahman Faisal Prince"
              fill
              className="object-cover"
              priority
            />
          </div>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>parmanurrahmanfaisal@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+8801521528257</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Chattogram, Bangladesh</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Md Armanur Rahman Faisal Prince</h1>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">DevOps Intern at AppifyLab</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I am currently working as a DevOps Intern at AppifyLab, focusing on Docker, Nginx, and CI/CD pipelines.
              With a strong background in competitive programming and a passion for problem-solving,
              I have participated in numerous programming contests and solved over 2000 problems across various platforms.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Current Role</h2>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">DevOps Intern at AppifyLab</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">November 2024 – present | Sylhet, Bangladesh</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Working on Docker, Nginx, SSL integration for automated deployments using Docker Compose and Swarm</li>
                  <li>Building CI/CD pipelines using Github Action</li>
                  <li>Hands-on experience with Linux, Bash Scripting, AWS EC2</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

