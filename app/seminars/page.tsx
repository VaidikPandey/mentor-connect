'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Calendar, Clock, Users, Star, Briefcase } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios';

interface Seminar {
    instructor: ReactNode
    rating: ReactNode
    capacity: ReactNode
    enrolled: ReactNode
    duration: ReactNode
    time: ReactNode
    thumbnail: string
    level: string
    category: string
    _id: string;
    title: string;
    description: string;
    date: string; // Date is stored as a string
    isPaid: boolean;
    price?: number;
    mentorId: string;
    createdAt?: string;
    updatedAt?: string;
}

export default function Component() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedLevel, setSelectedLevel] = useState("All")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [seminars, setSeminars] = useState<Seminar[]>([]);

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const response = await axios.get('/api/seminars');
                setSeminars(response.data);
            } catch (error) {
                console.error('Error fetching seminars:', error);
            }
        };

        fetchSeminars();
    }, []);

    const filteredSeminars = seminars.filter(seminar =>
        (seminar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            seminar.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || seminar.category === selectedCategory) &&
        (selectedLevel === "All" || seminar.level === selectedLevel)
    );

    // Assuming the backend provides category and level fields
    const categories = ["All", ...Array.from(new Set(seminars.map(seminar => seminar.category)))]
    const levels = ["All", "Beginner", "Intermediate", "Advanced"]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-base-200 to-base-300 text-base-content">

            <Header />

            <main className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
                    Explore Our <span className="text-black">Seminars</span>
                </h1>

                <div className="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
                    <div className="w-full md:w-2/3 relative">
                        <Input
                            type="text"
                            placeholder="Search seminars..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-gray-600 focus:outline-none  transition-colors duration-300 "
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={24} />
                    </div>
                    <div className="flex space-x-4 w-full md:w-1/3">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full sm:w-1/4 bg-white border-2 border-gray-600">
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
                            <SelectTrigger className="w-full sm:w-1/4 bg-white border-2 border-gray-600">
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
                        <Link href="/courses/add" className="btn btn-primary bg-blue-600 text-white hover:bg-black rounded-lg px-4 py-2 transition-colors text-sm">
                            Add Course
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredSeminars.map(seminar => (
                        <div key={seminar._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4">
                            <figure>
                                <img src={seminar.thumbnail || "https://via.placeholder.com/150"} alt={seminar.title} className="h-48 w-full object-cover rounded-t-lg" />
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
                                            {new Date(seminar.date).toLocaleDateString()}
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
                                    <Link href={`/seminars/${seminar._id}`} className="btn btn-primary bg-blue-500 text-white hover:bg-black rounded-lg px-4 py-2 transition-colors text-sm">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
