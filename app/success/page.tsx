"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen text-white p-6 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: "#060a25" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.3, animationDuration: "3s" }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.4, animationDuration: "2s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.2, animationDuration: "4s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.3, animationDuration: "2.5s" }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: "#c3ff00", opacity: 0.6, animationDuration: "3.5s" }}></div>
        <div className="absolute bottom-60 right-1/4 w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: "#c3ff00", opacity: 0.2, animationDuration: "4.5s" }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 animate-pulse" style={{ background: "radial-gradient(circle, #c3ff00 0%, transparent 70%)", animationDuration: "6s", transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-8 animate-pulse" style={{ background: "radial-gradient(circle, #c3ff00 0%, transparent 70%)", animationDuration: "8s", transform: "translate(50%, 50%)" }}></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#c3ff00] flex items-center justify-center animate-bounce">
            <CheckCircle className="w-16 h-16 text-black" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#c3ff00" }}>
          Registration Successful!
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Thank you for registering for 250Creators Day! We have received your information and you are now registered for the event.
        </p>

        {/* Event Details */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-gray-600">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#c3ff00" }}>
            What's Next?
          </h2>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>• You are now registered for the event</li>
            <li>• Follow us on social media for updates</li>
            <li>• Prepare for an amazing networking experience!</li>
            <li>• Check back for event details and location information</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-[#c3ff00] text-black px-8 py-3 rounded-lg font-medium text-lg hover:bg-[#a8e600] transition-colors">
              OK
            </Button>
          </Link>
          
          <div className="text-gray-400 text-sm">
            Questions? Contact us at info@croxstudios.com
          </div>
        </div>
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
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
