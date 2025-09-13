"use client"

import type React from "react"

import { useState } from "react"
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
    ahoMbarizwa: "",
    ufiteYoutube: [],
    youtubeHandle: "",
    tshirtNeeded: [],
    nicheYanjye: [],
    customNiche: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen text-white p-6 relative overflow-hidden" style={{ backgroundColor: "#060a25" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.3, animationDuration: "3s" }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.4, animationDuration: "2s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.2, animationDuration: "4s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.3, animationDuration: "2.5s" }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.6, animationDuration: "3.5s" }}></div>
        <div className="absolute bottom-60 right-1/4 w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.2, animationDuration: "4.5s" }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 animate-pulse" style={{ background: "radial-gradient(circle, #c3ff00 0%, transparent 70%)", animationDuration: "6s", transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-8 animate-pulse" style={{ background: "radial-gradient(circle, #c3ff00 0%, transparent 70%)", animationDuration: "8s", transform: "translate(50%, 50%)" }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Meet and Greet Header */}
        <div className="opacity-0" style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}>
          <MeetGreetHeader />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          {/* Slide-in animation to form sections */}
          <div className="space-y-4 opacity-0" style={{ animation: "slideInLeft 0.8s ease-out 0.6s forwards" }}>
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
            <h3 className="text-lg font-semibold mb-4 text-white">Uwo ndiwe</h3>

            <div className="space-y-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c3ff00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <Input
                  placeholder="Amazina"
                  value={formData.amazina}
                  onChange={(e) => setFormData((prev) => ({ ...prev, amazina: e.target.value }))}
                  className="relative bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c3ff00] focus:bg-gray-800/70 h-12 text-base transition-all duration-500 hover:shadow-2xl hover:shadow-[#c3ff00]/10 focus:shadow-2xl focus:shadow-[#c3ff00]/20 backdrop-blur-sm hover:scale-[1.02] focus:scale-[1.02] group-hover:border-[#c3ff00]/50"
                />
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c3ff00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <Input
                  placeholder="Email yawe"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="relative bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c3ff00] focus:bg-gray-800/70 h-12 text-base transition-all duration-500 hover:shadow-2xl hover:shadow-[#c3ff00]/10 focus:shadow-2xl focus:shadow-[#c3ff00]/20 backdrop-blur-sm hover:scale-[1.02] focus:scale-[1.02] group-hover:border-[#c3ff00]/50"
                />
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c3ff00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <Input
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
                  className="relative bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c3ff00] focus:bg-gray-800/70 h-12 text-base transition-all duration-500 hover:shadow-2xl hover:shadow-[#c3ff00]/10 focus:shadow-2xl focus:shadow-[#c3ff00]/20 backdrop-blur-sm hover:scale-[1.02] focus:scale-[1.02] group-hover:border-[#c3ff00]/50"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base font-semibold animate-fadeInUp" style={{ color: "#727586" }}>
                Aho mbarizwa <span className="animate-pulse" style={{ color: "#c3ff00" }}>*</span>
              </Label>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c3ff00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, ahoMbarizwa: value }))} defaultValue="kigali">
                  <SelectTrigger className="relative bg-gray-800/50 border-gray-600 text-white h-12 text-base transition-all duration-500 hover:shadow-2xl hover:shadow-[#c3ff00]/10 focus:shadow-2xl focus:shadow-[#c3ff00]/20 backdrop-blur-sm focus:border-[#c3ff00] hover:scale-[1.02] focus:scale-[1.02] group-hover:border-[#c3ff00]/50">
                    <SelectValue />
                  </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600 animate-in slide-in-from-top-2">
                  <SelectItem value="kigali" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                    Kigali
                  </SelectItem>
                  <SelectItem value="northern" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                    Amajyaruguru
                  </SelectItem>
                  <SelectItem value="southern" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                    Amajyepfo
                  </SelectItem>
                  <SelectItem value="eastern" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                    Iburasirazuba
                  </SelectItem>
                  <SelectItem value="western" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                    Iburengerazuba
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          </div>

          {/* Slide-in animation with delay */}
          <div className="space-y-6 opacity-0" style={{ animation: "slideInRight 0.8s ease-out 0.9s forwards" }}>
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
              onClick={() => toggleSection('youtube')}
            >
              <h3 className="text-xl font-medium" style={{ color: "#727586" }}>
                Ufite Youtube
                {formData.ufiteYoutube.length > 0 && (
                  <span className="ml-2 text-sm" style={{ color: "#c3ff00" }}>
                    ({formData.ufiteYoutube[0]})
                  </span>
                )}
              </h3>
              <span style={{ color: "#c3ff00" }}>*</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  expandedSections.youtube ? 'rotate-180' : ''
                }`}
                style={{ color: "#727586" }}
              />
            </div>

            <div className="space-y-3">
              {["Yego", "Ntayo", "Ndayitegaya"].map((option, index) => {
                const isSelected = formData.ufiteYoutube[0] === option;
                const shouldShow = expandedSections.youtube;
                
                return (
                  <div
                    key={option}
                    className={`group flex items-center space-x-3 transition-all duration-500 hover:translate-x-3 hover:bg-gradient-to-r hover:from-[#c3ff00]/5 hover:to-transparent p-3 rounded-lg hover:shadow-lg hover:shadow-[#c3ff00]/10 ${
                      shouldShow ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'
                    }`}
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#c3ff00]/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <Checkbox
                        id={`youtube-${option}`}
                        checked={isSelected}
                        onCheckedChange={(checked) => handleYoutubeChange(option, checked as boolean)}
                        className="relative border-gray-600 data-[state=checked]:border-[#c3ff00] data-[state=checked]:bg-[#c3ff00] transition-all duration-500 hover:scale-125 focus:scale-125 group-hover:border-[#c3ff00]/50"
                        style={
                          {
                            "--tw-ring-color": "#c3ff00",
                          } as React.CSSProperties & { "--tw-ring-color": string }
                        }
                      />
                    </div>
                    <Label htmlFor={`youtube-${option}`} style={{ color: "#727586" }} className="cursor-pointer group-hover:text-white transition-colors duration-300 font-medium">
                      {option}
                    </Label>
                  </div>
                );
              })}
            </div>

            {/* Conditional YouTube Handle Field */}
            {formData.ufiteYoutube[0] === "Yego" && (
              <div className="space-y-4 animate-in slide-in-from-left-4 duration-500">
                <div className="space-y-3">
                  <Label className="text-base font-semibold" style={{ color: "#727586" }}>
                    YouTube Handle
                  </Label>
                  <Input
                    placeholder="@yourhandle"
                    value={formData.youtubeHandle}
                    onChange={(e) => setFormData((prev) => ({ ...prev, youtubeHandle: e.target.value }))}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base focus:border-[#c3ff00] focus:bg-gray-800/70 transition-all duration-300 hover:shadow-lg focus:shadow-xl focus:shadow-[#c3ff00]/20 backdrop-blur-sm"
                  />
                </div>
                
                <div className="space-y-3">
                  <div 
                    className="cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                    onClick={() => toggleSection('tshirt')}
                  >
                    <Label className="text-base font-semibold" style={{ color: "#727586" }}>
                      Ukeneye T-shirt?
                      {formData.tshirtNeeded.length > 0 && (
                        <span className="ml-2 text-sm" style={{ color: "#c3ff00" }}>
                          ({formData.tshirtNeeded[0]})
                        </span>
                      )}
                    </Label>
                  </div>
                  <div className="space-y-2">
                    {["Yego", "Oya"].map((option) => {
                      const isSelected = formData.tshirtNeeded[0] === option;
                      const shouldShow = expandedSections.tshirt;
                      
                      return (
                        <div 
                          key={option} 
                          className={`flex items-center space-x-3 transition-all duration-500 ${
                            shouldShow ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'
                          }`}
                        >
                          <Checkbox
                            id={`tshirt-${option}`}
                            checked={isSelected}
                            onCheckedChange={(checked) => handleTshirtChange(option, checked as boolean)}
                            className="border-gray-600 data-[state=checked]:border-[#c3ff00] transition-all duration-300 hover:scale-110"
                          />
                          <Label htmlFor={`tshirt-${option}`} style={{ color: "#727586" }} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Slide-in animation with further delay */}
          <div className="space-y-6 opacity-0" style={{ animation: "slideInLeft 0.8s ease-out 1.2s forwards" }}>
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
              onClick={() => toggleSection('niche')}
            >
              <h3 className="text-xl font-medium" style={{ color: "#727586" }}>
                Niche yanjye ni
                {formData.nicheYanjye.length > 0 && (
                  <span className="ml-2 text-sm" style={{ color: "#c3ff00" }}>
                    ({formData.nicheYanjye[0]})
                  </span>
                )}
              </h3>
              <span style={{ color: "#c3ff00" }}>*</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  expandedSections.niche ? 'rotate-180' : ''
                }`}
                style={{ color: "#727586" }}
              />
            </div>

            <div className="space-y-3">
              {[
                "Technology",
                "Cinema",
                "Amakuru",
                "FinTech",
                "Travel & Vlog",
                "Documentary",
                "Imikino",
                "Indi itavuzwe",
              ].map((niche, index) => {
                const isSelected = formData.nicheYanjye[0] === niche;
                const shouldShow = expandedSections.niche;
                
                return (
                  <div
                    key={niche}
                    className={`flex items-center space-x-3 transition-all duration-500 hover:translate-x-2 hover:bg-white/5 p-2 rounded-lg ${
                      shouldShow ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'
                    }`}
                    style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                  >
                    <Checkbox
                      id={`niche-${niche}`}
                      checked={isSelected}
                      onCheckedChange={(checked) => handleNicheChange(niche, checked as boolean)}
                      className="border-gray-600 data-[state=checked]:border-[#c3ff00] transition-all duration-300 hover:scale-110"
                      style={
                        {
                          "--tw-ring-color": "#c3ff00",
                        } as React.CSSProperties & { "--tw-ring-color": string }
                      }
                    />
                    <Label htmlFor={`niche-${niche}`} style={{ color: "#727586" }} className="cursor-pointer">
                      {niche}
                    </Label>
                  </div>
                );
              })}
            </div>

            {/* Conditional Custom Niche Field */}
            {formData.nicheYanjye.includes("Indi itavuzwe") && (
              <div
                className="border-l-2 pl-6 space-y-4 animate-in slide-in-from-left-4 duration-500"
                style={{ borderColor: "#727586" }}
              >
                <div className="flex items-center gap-2 text-sm" style={{ color: "#727586" }}>
                  <span className="w-4 h-4 flex items-center justify-center animate-pulse">🔗</span>
                  <span>When</span>
                  <Select defaultValue="niche-yanjye">
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white w-auto transition-all duration-300 hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="niche-yanjye" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        Niche yanjye ni
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="contains">
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white w-auto transition-all duration-300 hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="contains" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        Contains
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="indi-itavuzwe">
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white w-auto transition-all duration-300 hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="indi-itavuzwe" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        Indi itavuzwe
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="animate-pulse">⋯</span>
                </div>

                <div className="flex items-center gap-2 text-sm" style={{ color: "#727586" }}>
                  <span className="w-4 h-4 flex items-center justify-center animate-bounce">⚡</span>
                  <span>Then</span>
                  <Select defaultValue="show-blocks">
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white w-auto transition-all duration-300 hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="show-blocks" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        Show blocks
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="niche">
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white w-auto transition-all duration-300 hover:shadow-md">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="niche" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                        Niche
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="animate-pulse">⋯</span>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Niche"
                    value={formData.customNiche}
                    onChange={(e) => setFormData((prev) => ({ ...prev, customNiche: e.target.value }))}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 max-w-xs focus:border-[#c3ff00] focus:bg-gray-800/70 transition-all duration-300 hover:shadow-lg focus:shadow-xl focus:shadow-[#c3ff00]/20 backdrop-blur-sm"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{ color: "#727586" }}
                    className="hover:bg-white/10 transition-colors duration-200"
                  >
                    ☰
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced button animations */}
          <div className="pt-6 opacity-0" style={{ animation: "fadeInUp 0.8s ease-out 1.5s forwards" }}>
            <Button
              type="submit"
              className="text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 relative overflow-hidden group"
              style={{ backgroundColor: "#c3ff00", color: "#1A1B2E" }}
            >
              <span className="relative z-10">Register →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </form>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
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
