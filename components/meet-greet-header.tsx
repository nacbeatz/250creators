"use client"

import React from "react"

export default function MeetGreetHeader() {
  return (
    <header className="w-screen md:w-4/5 md:mx-auto h-48 md:h-64 overflow-hidden -mx-6 md:mx-auto -mt-6">
      {/* Header Image */}
      <img
        src="/img/header-image.jpeg"
        alt="Meet and Greet Header"
        className="w-full h-full object-cover"
      />
    </header>
  )
}
