'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Book, Clock, Users, Star, Briefcase, Facebook, Twitter, Instagram, Linkedin, Menu } from 'lucide-react'

const courses = [
    { id: 1, title: "Complete Machine Learning Bootcamp", category: "Data Science", duration: "12 weeks", lessons: 60, students: 1500, rating: 4.8, level: "Beginner to Advanced", instructor: "Dr. Alice Johnson", price: 9999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 2, title: "Advanced React and Redux", category: "Web Development", duration: "8 weeks", lessons: 48, students: 1200, rating: 4.9, level: "Intermediate", instructor: "Bob Smith", price: 7999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 3, title: "Cybersecurity Specialist Certification", category: "Security", duration: "16 weeks", lessons: 80, students: 800, rating: 4.7, level: "Advanced", instructor: "Carol Williams", price: 12999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 4, title: "Data Visualization Mastery", category: "Data Science", duration: "6 weeks", lessons: 36, students: 950, rating: 4.6, level: "Intermediate", instructor: "David Brown", price: 5999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 5, title: "Cloud Architecture and DevOps", category: "Cloud Computing", duration: "10 weeks", lessons: 55, students: 700, rating: 4.8, level: "Advanced", instructor: "Eva Davis", price: 11499, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 6, title: "UI/UX Design from Scratch", category: "Design", duration: "8 weeks", lessons: 40, students: 1800, rating: 4.5, level: "Beginner", instructor: "Frank Miller", price: 6999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 7, title: "Blockchain Development", category: "Blockchain", duration: "14 weeks", lessons: 70, students: 600, rating: 4.7, level: "Intermediate to Advanced", instructor: "George Wilson", price: 13999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 8, title: "Python for Data Science and AI", category: "Data Science", duration: "10 weeks", lessons: 50, students: 2000, rating: 4.9, level: "Beginner to Intermediate", instructor: "Hannah Brown", price: 8999, thumbnail: "/placeholder.svg?height=400&width=600" },
    { id: 9, title: "Full-Stack Mobile App Development", category: "Mobile Development", duration: "16 weeks", lessons: 80, students: 1100, rating: 4.6, level: "Intermediate to Advanced", instructor: "Ian Taylor", price: 14999, thumbnail: "/placeholder.svg?height=400&width=600" },
]

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedLevel, setSelectedLevel] = useState("All")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const filteredCourses = courses.filter(course =>
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || course.category === selectedCategory) &&
        (selectedLevel === "All" || course.level.includes(selectedLevel))
    )

    const categories = ["All", ...Array.from(new Set(courses.map(course => course.category)))]
    const levels = ["All", "Beginner", "Intermediate", "Advanced"]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-base-200 to-base-300 text-base-content">
            <header className="bg-[#0B090A] text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">MentorConnect</h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/seminars" className="hover:text-primary transition-colors">Seminars</Link></li>
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
                            <li><Link href="/seminars" className="block hover:text-primary transition-colors">Seminars</Link></li>
                            <li><Link href="/pricing" className="block hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/signup" className="block bg-[#E5383B] hover:bg-[#A4161A] text-white px-4 py-2 rounded transition-colors mt-2">Sign Up</Link></li>
                        </ul>
                    </nav>
                </div>
            )}

            <main className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
                    Explore Our <span className="text-secondary">Expert-Led Courses</span>
                </h1>

                <div className="mb-8 flex flex-col space-y-4">
                    <div className="w-full relative">
                        <Input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-primary focus:outline-none focus:border-secondary transition-colors duration-300"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full sm:w-1/2">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                            <SelectTrigger className="w-full sm:w-1/2">
                                <SelectValue placeholder="Level" />
                            </SelectTrigger>
                            <SelectContent>
                                {levels.map(level => (
                                    <SelectItem key={level} value={level}>{level}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                        <div key={course.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4">
                            <figure>
                                <img src={course.thumbnail} alt={course.title} className="h-48 w-full object-cover rounded-t-lg" />
                            </figure>
                            <div className="card-body flex flex-col justify-between p-4">
                                <div>
                                    <h2 className="card-title text-lg sm:text-xl mb-2">
                                        {course.title}
                                    </h2>
                                    <div className="badge badge-secondary mb-2">{course.category}</div>
                                    <div className="space-y-2 mt-2 text-sm">
                                        <p className="flex items-center">
                                            <Clock size={14} className="mr-2" />
                                            Duration: {course.duration}
                                        </p>
                                        <p className="flex items-center">
                                            <Book size={14} className="mr-2" />
                                            {course.lessons} lessons
                                        </p>
                                        <p className="flex items-center">
                                            <Users size={14} className="mr-2" />
                                            {course.students} students enrolled
                                        </p>
                                        <p className="flex items-center">
                                            <Star size={14} className="mr-2" />
                                            {course.rating} ({course.level})
                                        </p>
                                        <p className="flex items-center">
                                            <Briefcase size={14} className="mr-2" />
                                            Instructor: {course.instructor}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg font-bold">₹{course.price}</span>
                                    <Link href={`/courses/${course.id}`} className="btn btn-primary bg-red-500 text-white hover:bg-red-600 rounded-lg px-4 py-2 transition-colors text-sm">
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