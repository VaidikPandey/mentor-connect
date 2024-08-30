'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, UserPlus, Briefcase, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<'mentor' | 'mentee'>('mentor')

    const handleTabChange = (value: 'mentor' | 'mentee') => {
        setActiveTab(value)
    }

    return (
        <div className="min-h-screen bg-[#F5F3F4] flex flex-col md:flex-row">
            {/* Left side with logo and info */}
            <div className="w-full md:w-1/3 bg-[#161A1D] flex flex-col items-center justify-center p-8 text-white">
                <Link href="/" className="text-4xl font-bold mb-8">
                    <span className="text-[#E5383B]">Mentor</span>Connect
                </Link>
                <div className="space-y-6 text-center">
                    <div className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Users size={48} className="mx-auto mb-2" />
                        <h3 className="text-xl font-semibold">Connect</h3>
                        <p className="text-sm text-[#B1A7A6]">Find your perfect mentor or mentee match</p>
                    </div>
                    <div className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Briefcase size={48} className="mx-auto mb-2" />
                        <h3 className="text-xl font-semibold">Grow</h3>
                        <p className="text-sm text-[#B1A7A6]">Accelerate your career with expert guidance</p>
                    </div>
                    <div className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <GraduationCap size={48} className="mx-auto mb-2" />
                        <h3 className="text-xl font-semibold">Learn</h3>
                        <p className="text-sm text-[#B1A7A6]">Gain valuable insights and skills</p>
                    </div>
                </div>
            </div>

            {/* Right side with login forms */}
            <div className="w-full md:w-2/3 p-8 flex items-center justify-center bg-gradient-to-br from-[#F5F3F4] to-[#D3D3D3]">
                <Card className="w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-[#0B090A]">Log In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={handleTabChange as (value: string) => void} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger
                                    value="mentor"
                                    className={`text-lg font-semibold py-3 rounded-full transition-all duration-300 mr-1 ${
                                        activeTab === 'mentor'
                                            ? 'bg-[#A4161A] text-white shadow-md'
                                            : 'bg-[#D3D3D3] text-[#0B090A]'
                                    } hover:bg-[#A4161A] hover:text-white hover:shadow-md`}
                                >
                                I'm a Mentor
                                </TabsTrigger>
                                <TabsTrigger
                                    value="mentee"
                                    className={`text-lg font-semibold py-3 rounded-full transition-all duration-300 ${
                                        activeTab === 'mentee'
                                            ? 'bg-[#A4161A] text-white shadow-md'
                                            : 'bg-[#D3D3D3] text-[#0B090A]'
                                    } hover:bg-[#A4161A] hover:text-white hover:shadow-md`}
                                >
                                I'm a Mentor
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="mentor">
                                <form className="space-y-6">
                                    <div>
                                        <Input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="bg-white border-[#B1A7A6] focus:border-[#E5383B] transition-colors duration-300 rounded-full py-6"
                                        />
                                    </div>
                                    <div>
                                        <Input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="bg-white border-[#B1A7A6] focus:border-[#E5383B] transition-colors duration-300 rounded-full py-6"
                                        />
                                    </div>
                                    <Button className="w-full bg-[#A4161A] hover:bg-[#BA181B] text-white transition-colors duration-300 flex items-center justify-center rounded-full py-6">
                                        Log In as Mentor <ArrowRight className="ml-2" size={18} />
                                    </Button>
                                </form>
                                <p className="mt-6 text-center text-sm text-[#660708]">
                                    Don't have an account?{" "}
                                    <Link href="signup" className="font-medium text-[#E5383B] hover:underline transition-colors duration-300">
                                        Sign up
                                    </Link>
                                </p>
                            </TabsContent>
                            <TabsContent value="mentee">
                                <form className="space-y-6">
                                    <div>
                                        <Input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="bg-white border-[#B1A7A6] focus:border-[#E5383B] transition-colors duration-300 rounded-full py-6"
                                        />
                                    </div>
                                    <div>
                                        <Input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="bg-white border-[#B1A7A6] focus:border-[#E5383B] transition-colors duration-300 rounded-full py-6"
                                        />
                                    </div>
                                    <Button className="w-full bg-[#A4161A] hover:bg-[#BA181B] text-white transition-colors duration-300 flex items-center justify-center rounded-full py-6">
                                        Log In as Mentee <ArrowRight className="ml-2" size={18} />
                                    </Button>
                                </form>
                                <p className="mt-6 text-center text-sm text-[#660708]">
                                    Don't have an account?{" "}
                                    <Link href="/signup" className="font-medium text-[#E5383B] hover:underline transition-colors duration-300">
                                        Sign up
                                    </Link>
                                </p>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
