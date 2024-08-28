"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Star, X, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Mentor {
    name: string;
    expertise: string;
    rating: number;
    skills: string[];
    image: string;
}

const mentors: Mentor[] = [
    { name: "Alice Johnson", expertise: "Full-Stack Development", rating: 4.9, skills: ["React", "Node.js", "Python"], image: "/placeholder.svg?height=400&width=400" },
    { name: "Bob Smith", expertise: "UI/UX Design", rating: 4.8, skills: ["Figma", "Adobe XD", "Sketch"], image: "/placeholder.svg?height=400&width=400" },
    { name: "Carol Williams", expertise: "Data Science", rating: 4.7, skills: ["Python", "R", "Machine Learning"], image: "/placeholder.svg?height=400&width=400" },
    { name: "David Brown", expertise: "Machine Learning", rating: 4.9, skills: ["TensorFlow", "PyTorch", "Scikit-learn"], image: "/placeholder.svg?height=400&width=400" },
    { name: "Eva Davis", expertise: "Product Management", rating: 4.8, skills: ["Agile", "Scrum", "User Stories"], image: "/placeholder.svg?height=400&width=400" },
]

const testimonials = [
    { text: "MentorConnect has been a game-changer for my career. The guidance I've received is invaluable.", name: "John Doe", role: "Software Engineer" },
    { text: "I've grown so much as a designer thanks to my mentor from MentorConnect. Highly recommended!", name: "Jane Smith", role: "UX Designer" },
    { text: "The personalized advice I got helped me land my dream job. Thank you, MentorConnect!", name: "Mike Johnson", role: "Data Analyst" },
    { text: "As someone switching careers, MentorConnect provided the support I needed to make a successful transition.", name: "Sarah Lee", role: "Product Manager" },
    { text: "The mentors here are truly world-class. I've learned more in months than I did in years on my own.", name: "Chris Taylor", role: "Full-Stack Developer" },
]

const platformFeatures = [
    { title: "Expert Mentors", description: "Connect with industry leaders who have proven track records in their fields." },
    { title: "Personalized Guidance", description: "Receive tailored advice and support to accelerate your career growth." },
    { title: "Flexible Scheduling", description: "Book sessions that fit your busy lifestyle, with options for both short-term and long-term mentorship." },
    { title: "Diverse Expertise", description: "Find mentors across various industries and specializations, from tech to creative fields." },
    { title: "Community Support", description: "Join a network of like-minded professionals and expand your connections." },
]

interface MentorCardProps {
    mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = React.memo(({ mentor }) => (
    <Card className="h-full">
        <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
                <div className="flex items-center mb-4">
                    <Image src={mentor.image} alt={mentor.name} width={64} height={64} className="rounded-full mr-4" />
                    <div>
                        <h4 className="font-bold text-lg">{mentor.name}</h4>
                        <p className="text-sm text-[#660708]">{mentor.expertise}</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-[#E5383B] mr-1" />
                    <span className="font-semibold">{mentor.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-[#D3D3D3] text-[#0B090A]">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
            <Button className="w-full mt-4 bg-primary hover:bg-primary-hover text-white transition-colors">
                View Profile
            </Button>
        </CardContent>
    </Card>
))

MentorCard.displayName = 'MentorCard'

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-secondary z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex justify-end p-4">
                <button onClick={onClose} className="text-white">
                    <X size={24} />
                </button>
            </div>
            <nav className="flex flex-col items-center">
                <Link href="#" className="text-white py-2 hover:text-primary transition-colors" onClick={onClose}>Find a Mentor</Link>
                <Link href="#" className="text-white py-2 hover:text-primary transition-colors" onClick={onClose}>Become a Mentor</Link>
                <Link href="/seminars" className="text-white py-2 hover:text-primary transition-colors" onClick={onClose}>Seminars</Link>
                <Link href="#" className="text-white py-2 hover:text-primary transition-colors" onClick={onClose}>Courses</Link>
                <Link href="#" className="text-white py-2 hover:text-primary transition-colors" onClick={onClose}>Pricing</Link>
                <Link href="/signup" className="text-white py-2 hover:text-primary transition-colors" onClick={onClose}>Sign Up</Link>
            </nav>
        </div>
    )
}

export default function HomePage() {
    const [activeMentor, setActiveMentor] = useState(0)
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const nextMentor = useCallback(() => {
        setActiveMentor((prev) => (prev + 1) % mentors.length)
    }, [])

    const nextTestimonial = useCallback(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, [])

    useEffect(() => {
        const mentorInterval = setInterval(nextMentor, 5000)
        const testimonialInterval = setInterval(nextTestimonial, 8000)
        return () => {
            clearInterval(mentorInterval)
            clearInterval(testimonialInterval)
        }
    }, [nextMentor, nextTestimonial])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="min-h-screen bg-background-light text-text-primary">
            <header className="bg-secondary text-white py-4 sticky top-0 z-20">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">MentorConnect</h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link href="#" className="hover:text-primary transition-colors">Find a Mentor</Link></li>
                            <li><Link href="/signup" className="hover:text-primary transition-colors">Become a Mentor</Link></li>
                            <li><Link href="" className="hover:text-primary transition-colors">Seminars</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Courses</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block">
                        <Link href="/signup">
                            <Button className="bg-primary hover:bg-primary-hover text-white transition-colors">Sign up / Sign in</Button>
                        </Link>
                    </div>
                    <button className="md:hidden text-white" onClick={toggleMobileMenu}>
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            <main className="container mx-auto mt-12 px-4">
                <section className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B090A]">Find Your Perfect Mentor</h2>
                    <p className="text-lg md:text-xl mb-8 text-[#161A1D]">Accelerate your career with personalized guidance from industry experts</p>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="relative w-full md:w-2/3 mb-4 md:mb-0">
                            <Input className="w-full pl-10 pr-4 py-3 rounded-full" placeholder="Search for mentors, skills, or industries" />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <Button className="bg-primary hover:bg-primary-hover text-white md:ml-2 rounded-full transition-colors w-full md:w-auto">
                            Search
                        </Button>
                    </div>
                </section>

                <section className="mb-16 flex flex-col md:flex-row items-start justify-between">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-3xl font-bold mb-6 text-[#0B090A]">Featured Mentors</h3>
                        <div className="relative h-[400px] w-full max-w-[400px] mx-auto">
                            {mentors.map((mentor, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === activeMentor ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <MentorCard mentor={mentor} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-8">
                        <h3 className="text-3xl font-bold mb-6 text-[#0B090A]">Why Choose MentorConnect?</h3>
                        <ul className="space-y-4">
                            {platformFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <ArrowRight className="h-6 w-6 text-[#A4161A] mr-2 flex-shrink-0" />
                                    <p><strong>{feature.title}:</strong> {feature.description}</p>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-6 bg-primary hover:bg-primary-hover text-white transition-colors w-full md:w-auto">
                            Learn More About Our Platform
                        </Button>
                    </div>
                </section>
            </main>

            <section className="bg-[#161A1D] text-white py-16">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h3>
                    <div className="relative max-w-2xl mx-auto">
                        <Card className="bg-[#0B090A] text-white">
                            <CardContent className="p-8">
                                <p className="text-lg mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#B1A7A6] rounded-full mr-4"></div>
                                    <div>
                                        <h5 className="font-bold">{testimonials[activeTestimonial].name}</h5>
                                        <p className="text-sm text-[#D3D3D3]">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <footer className="bg-[#0B090A] text-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4">MentorConnect</h4>
                        <p className="text-[#B1A7A6]">Connecting aspiring professionals with industry-leading mentors.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-[#B1A7A6] hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-[#B1A7A6] hover:text-white transition-colors">How It Works</Link></li>
                            <li><Link href="#" className="text-[#B1A7A6] hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="text-[#B1A7A6] hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>
                        <p className="text-[#B1A7A6] mb-4">Subscribe to our newsletter for the latest updates and mentor insights.</p>
                        <div className="flex flex-col sm:flex-row">
                            <Input className="bg-[#161A1D] text-white mb-2 sm:mb-0 sm:mr-2" placeholder="Your email" />
                            <Button className="bg-[#A4161A] hover:bg-[#BA181B] text-white transition-colors">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-8 pt-8 border-t border-[#161A1D] text-center">
                    <p>&copy; {new Date().getFullYear()} MentorConnect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}