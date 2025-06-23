"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Droplets, Sprout, Building2, Bug, ChevronRight, Users, Target, Lightbulb, Globe } from "lucide-react"

const farmingMethods = [
  {
    id: "hydroponics",
    title: "Hydroponics",
    subtitle: "Soil-less farming",
    icon: Droplets,
    color: "bg-blue-500",
    description: "Grow plants without soil using nutrient-rich water solutions",
    benefits: [
      "Uses 90% less water than traditional farming",
      "Faster plant growth and higher yields",
      "No soil-borne diseases or pests",
      "Can be done anywhere, even in cities",
    ],
    howItWorks:
      "Plants grow in water mixed with nutrients. Roots either float in the solution or are supported by materials like perlite or coconut fiber.",
    tooltip: "Perfect for areas with poor soil quality!",
  },
  {
    id: "drip-irrigation",
    title: "Drip Irrigation",
    subtitle: "Water-saving technique",
    icon: Sprout,
    color: "bg-green-500",
    description: "Deliver water directly to plant roots drop by drop",
    benefits: [
      "Saves up to 50% water compared to flooding",
      "Reduces weed growth",
      "Prevents water-related diseases",
      "Works with fertilizers for better nutrition",
    ],
    howItWorks:
      "Water flows through tubes with small holes near each plant. This delivers water slowly and directly to the roots.",
    tooltip: "Great for dry areas and water conservation!",
  },
  {
    id: "vertical-farming",
    title: "Vertical Farming",
    subtitle: "Space-saving crop setup",
    icon: Building2,
    color: "bg-purple-500",
    description: "Stack crops in layers to maximize growing space",
    benefits: [
      "Grows more food in less space",
      "Perfect for urban areas",
      "Protected from weather and pests",
      "Year-round production possible",
    ],
    howItWorks:
      "Plants are grown in stacked layers, often indoors with LED lights. Each layer has its own irrigation and lighting system.",
    tooltip: "Ideal for small plots and urban farming!",
  },
  {
    id: "organic-pest-control",
    title: "Organic Pest Control",
    subtitle: "Eco-friendly pest solutions",
    icon: Bug,
    color: "bg-orange-500",
    description: "Control pests naturally without harmful chemicals",
    benefits: [
      "Safe for humans and environment",
      "Protects beneficial insects",
      "Builds healthy soil ecosystem",
      "Reduces chemical costs",
    ],
    howItWorks:
      "Use natural predators, companion planting, neem oil, and organic sprays to control pests without chemicals.",
    tooltip: "Keeps food safe and protects the environment!",
  },
]

const stats = [
  { icon: Users, label: "Youth Educated", value: "10,000+" },
  { icon: Target, label: "Success Rate", value: "85%" },
  { icon: Lightbulb, label: "Techniques Taught", value: "4+" },
  { icon: Globe, label: "Communities Reached", value: "50+" },
]

export default function SmartFarmingPlatform() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Agriculture & Technology</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">🧑🏾‍🌾 Smart Farming Education Platform</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Empowering Kenya's youth with modern, sustainable farming techniques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Start Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
            <blockquote className="text-lg text-gray-700 italic border-l-4 border-green-500 pl-6 bg-white p-6 rounded-lg shadow-sm">
              "Most youth in Kenya are unfamiliar with smart farming techniques. Traditional methods are no longer
              sufficient due to climate change and land challenges. There's a need for an accessible, digital tool that
              educates youth on sustainable, tech-driven farming."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Farming Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Modern Farming Techniques</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover four revolutionary farming methods that are transforming agriculture in Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmingMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={method.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    hoveredCard === method.id ? "ring-2 ring-green-500" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(method.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-gray-600">{method.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">{method.description}</p>

                    {hoveredCard === method.id && (
                      <div className="bg-green-50 p-3 rounded-lg mb-4 animate-in slide-in-from-top-2 duration-200">
                        <p className="text-sm font-medium text-green-800">💡 {method.tooltip}</p>
                      </div>
                    )}

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <DialogTitle className="text-2xl">{method.title}</DialogTitle>
                              <DialogDescription className="text-base">{method.subtitle}</DialogDescription>
                            </div>
                          </div>
                        </DialogHeader>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-2">How it works:</h4>
                            <p className="text-gray-700">{method.howItWorks}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                            <ul className="space-y-2">
                              {method.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Transforming agriculture across Kenya, one student at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-semibold mb-2">Educates</h3>
              <p className="text-green-100">The next generation of farmers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-2">Supports</h3>
              <p className="text-green-100">Food security in Kenya</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold mb-2">Promotes</h3>
              <p className="text-green-100">Climate-smart agriculture</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="font-semibold mb-2">Inspires</h3>
              <p className="text-green-100">Youth to explore agri-tech careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Future Plans</h2>
            <p className="text-lg text-gray-600">Expanding our platform to reach even more young farmers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🎥</div>
              <h3 className="font-semibold text-lg mb-2">Video Tutorials</h3>
              <p className="text-gray-600">Step-by-step video guides for each farming technique</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🧩</div>
              <h3 className="font-semibold text-lg mb-2">Interactive Quizzes</h3>
              <p className="text-gray-600">Test knowledge and track learning progress</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🗣️</div>
              <h3 className="font-semibold text-lg mb-2">Local Languages</h3>
              <p className="text-gray-600">Translate content into Swahili and other local languages</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold text-lg mb-2">Real-time Data</h3>
              <p className="text-gray-600">Connect to live agricultural and weather data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <blockquote className="text-lg italic text-gray-300 max-w-3xl mx-auto mb-8">
              "This platform is a digital solution for a farming future. It shows how simple web technologies can be
              used to educate, inspire, and transform agriculture across Kenya."
            </blockquote>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 mb-2">
                Project by: <span className="text-white font-semibold">Felix Kioni & Derrick Gucema</span>
              </p>
              <p className="text-gray-400">Category: Agriculture & Technology</p>
              <p className="text-gray-400">Tech Used: HTML • CSS • JavaScript • Next.js • React</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
