"use client";
import { useState } from "react";
import * as React from "react";
import Link from "next/link";

// Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`px-4 py-2 bg-[#284B63] hover:bg-[#3C6E71] text-white rounded-md ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Input component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`w-full p-2 border border-[#D9D9D9] rounded-md focus:border-[#3C6E71] focus:outline-none ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Textarea component
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`w-full p-2 border border-[#D9D9D9] rounded-md focus:border-[#3C6E71] focus:outline-none min-h-[100px] ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

// Label component
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={`block text-sm font-medium text-[#353535] ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

// Card components
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white border-2 border-[#3C6E71] rounded-lg shadow-lg ${className}`} {...props} />
);

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 bg-[#284B63] text-white rounded-t-lg ${className}`} {...props} />
);

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={`text-3xl font-bold ${className}`} {...props} />
);

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-[#D9D9D9] mt-2 ${className}`} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 ${className}`} {...props} />
);

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 border-t border-[#D9D9D9] ${className}`} {...props} />
);

// Tabs components
const Tabs = ({ value, onValueChange, className, children }: { value: string; onValueChange: (value: string) => void; className?: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);

const TabsList = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex ${className}`}>{children}</div>
);

const TabsTrigger = ({ value, activeValue, onClick, className, children }: { value: string; activeValue: string; onClick: () => void; className?: string; children: React.ReactNode }) => (
  <button
    className={`flex-1 py-2 text-center ${value === activeValue ? 'bg-[#3C6E71] text-white' : 'bg-[#D9D9D9] text-[#353535]'} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabsContent = ({ value, activeValue, children }: { value: string; activeValue: string; children: React.ReactNode }) => (
  value === activeValue ? <div>{children}</div> : null
);

// Custom Icons
const UsersIcon = () => (
  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a8 8 0 10-16 0v2h5m-7 4h16a2 2 0 002-2v-2a10 10 0 10-20 0v2a2 2 0 002 2z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7V6a2 2 0 012-2h12a2 2 0 012 2v1M4 7v1a2 2 0 002 2h12a2 2 0 002-2V7m-2 0h-4m-4 0H6M5 15h14v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4z" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v5m0-5l-7 4m14-4l-7 4" />
  </svg>
);

export default function SignUpPage() {
  const [activeTab, setActiveTab] = useState('mentee');

  const renderInput = (id: string, label: string, type = "text", placeholder = "") => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        required 
      />
    </div>
  );

  const renderTextarea = (id: string, label: string, placeholder: string) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea 
        id={id} 
        placeholder={placeholder} 
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#D9D9D9] text-[#353535]">
      {/* Sidebar */}
      <div className="flex-1  bg-[#161A1D] flex flex-col items-center justify-center p-5 text-white ">
        <Link href="/" className="text-4xl font-bold mb-8">
          <span className="text-[#E5383B]">Mentor</span>Connect
        </Link>
        <div className="space-y-3 text-center">
          <div className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <UsersIcon />
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="text-sm text-[#B1A7A6]">Find your perfect mentor or mentee match</p>
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <BriefcaseIcon />
            <h3 className="text-xl font-semibold">Grow</h3>
            <p className="text-sm text-[#B1A7A6]">Accelerate your career with expert guidance</p>
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <GraduationCapIcon />
            <h3 className="text-xl font-semibold">Learn</h3>
            <p className="text-sm text-[#B1A7A6]">Gain valuable insights and skills</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="min-h-screen w-[950px] md:w-2/3 bg-[#D9D9D9] text-[#353535] p-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-[#284B63] mb-8">Mentor Connect</h1>
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">
            Join our community as a mentor or mentee
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#D9D9D9]">
              <TabsTrigger 
                value="mentee" 
                activeValue={activeTab}
                onClick={() => setActiveTab('mentee')}
                className="rounded-tl-md rounded-bl-md"
              >
                As a Mentee
              </TabsTrigger>
              <TabsTrigger 
                value="mentor"
                activeValue={activeTab}
                onClick={() => setActiveTab('mentor')}
                className="rounded-tr-md rounded-br-md"
              >
                As a Mentor
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mentee" activeValue={activeTab}>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {renderInput("mentee-name", "Name", "text", "John Doe")}
                  {renderInput("mentee-email", "Email", "email", "john@example.com")}
                </div>
                {renderInput("mentee-password", "Password", "password")}
                {renderTextarea("mentee-bio", "Bio", "Tell us about yourself and what you hope to learn")}
              </form>
            </TabsContent>
            <TabsContent value="mentor" activeValue={activeTab}>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {renderInput("mentor-name", "Name", "text", "Jane Smith")}
                  {renderInput("mentor-email", "Email", "email", "jane@example.com")}
                </div>
                {renderInput("mentor-password", "Password", "password")}
                {renderTextarea("mentor-bio", "Bio", "Tell us about your experience and expertise")}
                {renderTextarea("mentor-expertise", "Expertise", "List your areas of expertise, separated by commas")}
                {renderInput("mentor-degree", "Degree", "text", "e.g. Bachelor's in Computer Science")}
                {renderInput("mentor-specialization", "Specialization", "text", "e.g. Machine Learning")}
                {renderTextarea("mentor-places-worked", "Places Worked", "List the companies or institutions you've worked for")}
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">
            Sign Up
          </Button>
          <p className="text-sm text-[#353535] text-center">
            By signing up, you agree to our{" "}
            <a href="#" className="text-[#3C6E71] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#3C6E71] hover:underline">
              Privacy Policy
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
}
