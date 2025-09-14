"use client"

import type React from "react"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import MeetGreetHeader from "@/components/meet-greet-header"

interface FormData {
  amazina: string
  email: string
  telefone: string
  ahoMbarizwa: string
  ufiteYoutube: string[]
  youtubeHandle: string
  tshirtNeeded: string[]
  nicheYanjye: string[]
  customNiche: string
}

export default function CreatorsRegistration() {
  const [formData, setFormData] = useState<FormData>({
    amazina: "",
    email: "",
    telefone: "",
    ahoMbarizwa: "kigali", // Set default value
    ufiteYoutube: [],
    youtubeHandle: "",
    tshirtNeeded: [],
    nicheYanjye: [],
    customNiche: "",
  })

  // Validation logic for each step (must be after formData declaration)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{8,}$/;
  const isStep1Valid =
    !!formData.amazina &&
    !!formData.email && emailRegex.test(formData.email) &&
    !!formData.telefone && phoneRegex.test(formData.telefone) &&
    !!formData.ahoMbarizwa;
  const isStep2Valid = formData.ufiteYoutube.length > 0 && (formData.ufiteYoutube[0] !== "Yego" || formData.youtubeHandle) && formData.tshirtNeeded.length > 0;
  const isStep3Valid = formData.nicheYanjye.length > 0 && (!formData.nicheYanjye.includes("Indi itavuzwe") || formData.customNiche);

  const [expandedSections, setExpandedSections] = useState({
    youtube: true,
    tshirt: true,
    niche: true,
  })

  const handleYoutubeChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      ufiteYoutube: checked ? [value] : [],
    }))
  }

  const handleTshirtChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      tshirtNeeded: checked ? [value] : [],
    }))
  }

  const handleNicheChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      nicheYanjye: checked ? [value] : [],
    }))
  }

  const toggleSection = (section: 'youtube' | 'tshirt' | 'niche') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('C4wa8sWckJ6dOAeGt');
      
      // Map location values to display names
      const locationMap: { [key: string]: string } = {
        'kigali': 'Kigali',
        'northern': 'Amajyaruguru',
        'southern': 'Amajyepfo',
        'eastern': 'Iburasirazuba',
        'western': 'Iburengerazuba'
      };

      // Prepare template parameters
      const templateParams = {
        amazina: formData.amazina,
        email: formData.email,
        telefone: formData.telefone,
        ahoMbarizwa: locationMap[formData.ahoMbarizwa] || formData.ahoMbarizwa,
        ufiteYoutube: formData.ufiteYoutube.join(', '),
        youtubeHandle: formData.youtubeHandle || 'N/A',
        tshirtNeeded: formData.tshirtNeeded.join(', '),
        nicheYanjye: formData.nicheYanjye.join(', '),
        customNiche: formData.customNiche || '',
        submission_date: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_2697wie', // Service ID
        'template_45knqdc', // Template ID
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      // Redirect to success page
      window.location.href = '/success';
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your registration. Please try again.');
    }
  }

  const [step, setStep] = useState(1);
  return (
    <div className="min-h-screen text-white p-6 relative overflow-hidden" style={{ backgroundColor: "#060a25" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* ...existing code for background... */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.3, animationDuration: "3s" }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.4, animationDuration: "2s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.2, animationDuration: "4s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.3, animationDuration: "2.5s" }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.6, animationDuration: "3.5s" }}></div>
        <div className="absolute bottom-60 right-1/4 w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.2, animationDuration: "4.5s" }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 animate-pulse" style={{ background: "radial-gradient(circle, #c3ff00 0%, transparent 70%)", animationDuration: "6s", transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-8 animate-pulse" style={{ background: "radial-gradient(circle, #c3ff00 0%, transparent 70%)", animationDuration: "8s", transform: "translate(50%, 50%)" }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 animate-mobilefadein">
        {/* Meet and Greet Header */}
        <div className="opacity-0" style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}>
          <MeetGreetHeader />
        </div>
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c3ff00]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10" style={{ color: "#c3ff00" }}>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>2</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>5</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>0</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>C</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>R</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>E</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.7s" }}>A</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.8s" }}>T</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.9s" }}>O</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.0s" }}>R</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.1s" }}>S</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.2s" }}> </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.3s" }}>D</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.4s" }}>A</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.5s" }}>Y</span>
          </h2>
          <p className="text-base text-gray-300 relative z-10 animate-fadeInUp" style={{ animationDelay: "1.8s" }}>
            Join us for an amazing networking and collaboration event
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          {step === 1 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-white">Uwo ndiwe</h3>
              {/* Personal info fields */}
              <div className="space-y-3">
                <Input
                  placeholder="Amazina"
                  value={formData.amazina}
                  onChange={(e) => setFormData((prev) => ({ ...prev, amazina: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base"
                />
                <Input
                  placeholder="Email yawe"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base"
                />
                <Input
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base"
                />
                <Label className="flex items-center gap-2 text-base font-semibold" style={{ color: "#727586" }}>
                  Aho mbarizwa <span className="animate-pulse" style={{ color: "#c3ff00" }}>*</span>
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, ahoMbarizwa: value }))} defaultValue="kigali">
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white h-12 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="kigali" className="text-white">Kigali</SelectItem>
                    <SelectItem value="northern" className="text-white">Amajyaruguru</SelectItem>
                    <SelectItem value="southern" className="text-white">Amajyepfo</SelectItem>
                    <SelectItem value="eastern" className="text-white">Iburasirazuba</SelectItem>
                    <SelectItem value="western" className="text-white">Iburengerazuba</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#c3ff00] text-black px-6 py-2 rounded cursor-pointer"
                >
                  Next
                </Button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-white">Ufite Youtube & T-shirt</h3>
              {/* Youtube & T-shirt fields */}
              <div className="space-y-3">
                {["Yego", "Ntayo", "Ndayitegaya"].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={`youtube-${option}`}
                      checked={formData.ufiteYoutube[0] === option}
                      onCheckedChange={(checked) => handleYoutubeChange(option, checked as boolean)}
                      className="border-gray-600 data-[state=checked]:border-[#c3ff00]"
                    />
                    <Label htmlFor={`youtube-${option}`} style={{ color: "#727586" }} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
                {formData.ufiteYoutube[0] === "Yego" && (
                  <Input
                    placeholder="@yourhandle"
                    value={formData.youtubeHandle}
                    onChange={(e) => setFormData((prev) => ({ ...prev, youtubeHandle: e.target.value }))}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base"
                  />
                )}
                <Label className="text-base font-semibold" style={{ color: "#727586" }}>
                  Ukeneye T-shirt?
                </Label>
                {["Yego", "Oya"].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={`tshirt-${option}`}
                      checked={formData.tshirtNeeded[0] === option}
                      onCheckedChange={(checked) => handleTshirtChange(option, checked as boolean)}
                      className="border-gray-600 data-[state=checked]:border-[#c3ff00]"
                    />
                    <Label htmlFor={`tshirt-${option}`} style={{ color: "#727586" }} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button type="button" onClick={() => setStep(1)} className="bg-gray-700 text-white px-6 py-2 rounded">Back</Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#c3ff00] text-black px-6 py-2 rounded"
                >
                  Next
                </Button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-white">Niche yanjye ni</h3>
              {/* Niche fields */}
              <div className="space-y-3">
                {["Technology", "Cinema", "Amakuru", "FinTech", "Travel & Vlog", "Documentary", "Imikino", "Indi itavuzwe"].map((niche) => (
                  <div key={niche} className="flex items-center space-x-3">
                    <Checkbox
                      id={`niche-${niche}`}
                      checked={formData.nicheYanjye[0] === niche}
                      onCheckedChange={(checked) => handleNicheChange(niche, checked as boolean)}
                      className="border-gray-600 data-[state=checked]:border-[#c3ff00]"
                    />
                    <Label htmlFor={`niche-${niche}`} style={{ color: "#727586" }} className="cursor-pointer">
                      {niche}
                    </Label>
                  </div>
                ))}
                {formData.nicheYanjye.includes("Indi itavuzwe") && (
                  <Input
                    placeholder="Niche"
                    value={formData.customNiche}
                    onChange={(e) => setFormData((prev) => ({ ...prev, customNiche: e.target.value }))}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 max-w-xs h-12 text-base"
                  />
                )}
              </div>
              <div className="flex justify-between mt-6">
                <Button type="button" onClick={() => setStep(2)} className="bg-gray-700 text-white px-6 py-2 rounded">Back</Button>
                <Button type="submit" className="bg-[#c3ff00] text-black px-8 py-3 rounded-lg font-medium">Register →</Button>
              </div>
            </>
          )}
        </form>
      </div>
      {/* ...existing custom CSS animations... */}
      <style jsx>{`
        @media (max-width: 768px) {
          .animate-mobilefadein {
            animation: mobilefadein 1s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
        }
        @keyframes mobilefadein {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px #c3ff00, 0 0 10px #c3ff00, 0 0 15px #c3ff00;
          }
          50% {
            box-shadow: 0 0 10px #c3ff00, 0 0 20px #c3ff00, 0 0 30px #c3ff00;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(195, 255, 0, 0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}
