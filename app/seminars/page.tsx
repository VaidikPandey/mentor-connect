'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Calendar, Clock, Users, Star, Briefcase, Facebook, Twitter, Instagram, Linkedin, Menu } from 'lucide-react'

const seminars = [
    { id: 1, title: "Introduction to Machine Learning", category: "Data Science", date: "2023-07-15", time: "14:00", duration: "2 hours", capacity: 50, enrolled: 32, rating: 4.8, level: "Beginner", instructor: "Dr. Alice Johnson", price: 2999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 2, title: "Advanced React Patterns", category: "Web Development", date: "2023-07-18", time: "10:00", duration: "3 hours", capacity: 40, enrolled: 38, rating: 4.9, level: "Advanced", instructor: "Bob Smith", price: 3999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 3, title: "Cybersecurity in the Modern Age", category: "Security", date: "2023-07-20", time: "15:00", duration: "2.5 hours", capacity: 45, enrolled: 20, rating: 4.7, level: "Intermediate", instructor: "Carol Williams", price: 3499, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 4, title: "Data Visualization with D3.js", category: "Data Science", date: "2023-07-22", time: "11:00", duration: "2 hours", capacity: 35, enrolled: 28, rating: 4.6, level: "Intermediate", instructor: "David Brown", price: 2799, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 5, title: "Cloud Architecture Best Practices", category: "Cloud Computing", date: "2023-07-25", time: "13:00", duration: "3 hours", capacity: 30, enrolled: 25, rating: 4.8, level: "Advanced", instructor: "Eva Davis", price: 4299, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 6, title: "UI/UX Design Principles", category: "Design", date: "2023-07-28", time: "09:00", duration: "4 hours", capacity: 55, enrolled: 40, rating: 4.5, level: "Beginner", instructor: "Frank Miller", price: 3299, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 7, title: "Blockchain Fundamentals", category: "Blockchain", date: "2023-08-01", time: "11:00", duration: "2.5 hours", capacity: 40, enrolled: 22, rating: 4.7, level: "Beginner", instructor: "George Wilson", price: 3799, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 8, title: "Advanced Python for Data Science", category: "Data Science", date: "2023-08-03", time: "14:00", duration: "3 hours", capacity: 35, enrolled: 30, rating: 4.9, level: "Advanced", instructor: "Hannah Brown", price: 4199, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 9, title: "Mobile App Development with Flutter", category: "Mobile Development", date: "2023-08-05", time: "10:00", duration: "4 hours", capacity: 45, enrolled: 35, rating: 4.6, level: "Intermediate", instructor: "Ian Taylor", price: 3699, thumbnail: "/placeholder.svg?height=400&width=600" },
]

export default function Component() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedLevel, setSelectedLevel] = useState("All")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const filteredSeminars = seminars.filter(seminar =>
        (seminar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            seminar.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || seminar.category === selectedCategory) &&
        (selectedLevel === "All" || seminar.level === selectedLevel)
    )

    const categories = ["All", ...Array.from(new Set(seminars.map(seminar => seminar.category)))]
    const levels = ["All", "Beginner", "Intermediate", "Advanced"]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-base-200 to-base-300 text-base-content">
            <header className="bg-[#0B090A] text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">MentorConnect</h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/signup" className="bg-[#E5383B] hover:bg-[#A4161A] text-white px-4 py-2 rounded transition-colors">Sign Up</Link></li>
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
                            <li><Link href="/cources" className="block hover:text-primary transition-colors">Courses</Link></li>
                            <li><Link href="/pricing" className="block hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/signup" className="block bg-[#E5383B] hover:bg-[#A4161A] text-white px-4 py-2 rounded transition-colors mt-2">Sign Up</Link></li>
                        </ul>
                    </nav>
                </div>
            )}

            <main className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Connect with <span className="text-[#E5383B]">Expert Mentors</span>
                </h1>

                <div className="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-2/3 relative">
                        <Input
                            type="text"
                            placeholder="Search seminars..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-primary focus:outline-none focus:border-[#E5383B] transition-colors duration-300 text-lg"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={24} />
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-1/3">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full sm:w-1/2 bg-white border-2 border-primary">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {categories.map(category => (
                                    <SelectItem key={category} value={category} className="hover:bg-gray-100">
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                            <SelectTrigger className="w-full sm:w-1/2 bg-white border-2 border-primary">
                                <SelectValue placeholder="Level" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {levels.map(level => (
                                    <SelectItem key={level} value={level} className="hover:bg-gray-100">
                                        {level}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSeminars.map(seminar => (
                        <div key={seminar.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4">
                            <figure>
                                <img src={seminar.thumbnail} alt={seminar.title} className="h-48 w-full object-cover rounded-t-lg" />
                            </figure>
                            <div className="card-body flex flex-col justify-between p-4">
                                <div>
                                    <h2 className="card-title text-lg sm:text-xl mb-2">
                                        {seminar.title}
                                    </h2>
                                    <div className="badge badge-secondary mb-2">{seminar.category}</div>
                                    <div className="space-y-2 mt-2 text-sm">
                                        <p className="flex items-center">
                                            <Calendar size={14} className="mr-2" />
                                            {seminar.date}
                                        </p>
                                        <p className="flex items-center">
                                            <Clock size={14} className="mr-2" />
                                            {seminar.time} - {seminar.duration}
                                        </p>
                                        <p className="flex items-center">
                                            <Users size={14} className="mr-2" />
                                            {seminar.enrolled}/{seminar.capacity} enrolled
                                        </p>
                                        <p className="flex items-center">
                                            <Star size={14} className="mr-2" />
                                            {seminar.rating} ({seminar.level})
                                        </p>
                                        <p className="flex items-center">
                                            <Briefcase size={14} className="mr-2" />
                                            Instructor: {seminar.instructor}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg font-bold">₹{seminar.price}</span>
                                    <Link href={`/seminars/${seminar.id}`} className="btn btn-primary bg-red-500 text-white hover:bg-red-600 rounded-lg px-4 py-2 transition-colors text-sm">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

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