"use client"
import { useState } from 'react'
import Link from 'next/link'
import { X, Menu, Search, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mentors = [
  { name: "Kevin Indig", role: "Director of SEO at Shopify", image: "/placeholder.svg?height=100&width=100", description: "Kevin is a seasoned SEO expert with years of experience in optimizing search engine performance and strategy." },
  { name: "Ray Forer", role: "Co-Founder at Quartz VC", image: "/placeholder.svg?height=100&width=100", description: "Ray is a venture capitalist with a focus on investing in innovative startups and emerging technologies." },
  { name: "Hannah Parvaz", role: "Head of Growth at Curio", image: "/placeholder.svg?height=100&width=100", description: "Hannah excels in scaling businesses through growth strategies and data-driven marketing approaches." },
  { name: "Eden Bidani", role: "Conversion Copywriter", image: "/placeholder.svg?height=100&width=100", description: "Eden specializes in crafting compelling copy that drives conversions and engages audiences." },
  { name: "Nurkan Kirkan", role: "Head of Growth at Trustpilot", image: "/placeholder.svg?height=100&width=100", description: "Nurkan leads growth initiatives with a focus on expanding Trustpilot’s market presence and customer engagement." },
  { name: "Michael Taylor", role: "Co-Founder at Ladder.io", image: "/placeholder.svg?height=100&width=100", description: "Michael is an entrepreneur with a track record of building and scaling successful startups." },
  { name: "Joanna Delaney", role: "Senior Marketing Strategist at Videous", image: "/placeholder.svg?height=100&width=100", description: "Joanna provides strategic marketing insights and campaigns to drive brand growth and customer acquisition." },
  { name: "Margarita Loktionova", role: "Content Marketing Lead at Semrush", image: "/placeholder.svg?height=100&width=100", description: "Margarita leads content marketing efforts, creating impactful content strategies that enhance brand visibility." },
]

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-[#F5F3F4] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#0B090A] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MentorConnect</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/seminars" className="hover:text-primary transition-colors">Seminars</Link></li>
              <li><Link href="/cources" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/signup" className="bg-[#E5383B] hover:bg-[#A4161A] text-white px-4 py-2 rounded transition-colors">Login/Signup</Link></li>
            </ul>
          </nav>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B090A] text-white py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li><Link href="/" className="block hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/seminars" className="block hover:text-primary transition-colors">Seminars</Link></li>
              <li><Link href="/pricing" className="block hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/signup" className="block bg-[#E5383B] hover:bg-[#A4161A] text-white px-4 py-2 rounded transition-colors mt-2">Login/Signup</Link></li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#0B090A] mb-8 text-center">Discover Your Perfect Mentor</h1>

        {/* Search */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <Input
              className="bg-white text-[#0B090A] pl-10 pr-4 py-2 w-full rounded-full border-2 border-[#B1A7A6] focus:outline-none focus:border-[#E5383B]"
              placeholder="Search for mentors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B1A7A6]" size={20} />
          </div>
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMentors.map((mentor, index) => (
            <Card key={index} className="bg-white border-[#B1A7A6] border overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-[#BA181B]"
                />
                <h2 className="text-lg font-semibold text-[#0B090A] mb-1">{mentor.name}</h2>
                <p className="text-[#161A1D] text-sm mb-2">{mentor.role}</p>
                <p className="text-[#6C6E6F] text-sm mb-2">{mentor.description}</p> {/* Added description */}
                <Button className="mt-4 bg-[#A4161A] hover:bg-[#BA181B] text-white transition-colors">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B090A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MentorConnect</h3>
              <p className="text-sm">Connecting mentors and learners for a brighter future.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#E5383B] transition-colors">Home</Link></li>
                <li><Link href="/seminars" className="hover:text-[#E5383B] transition-colors">Seminars</Link></li>
                <li><Link href="/courses" className="hover:text-[#E5383B] transition-colors">Courses</Link></li>
                <li><Link href="/pricing" className="hover:text-[#E5383B] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-sm">123 Learning Street</p>
              <p className="text-sm">Education City, ED 12345</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
              <p className="text-sm">Email: info@mentorconnect.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#E5383B] transition-colors"><Facebook size={24} /></a>
                <a href="#" className="hover:text-[#E5383B] transition-colors"><Twitter size={24} /></a>
                <a href="#" className="hover:text-[#E5383B] transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-[#E5383B] transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; 2023 MentorConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}