"use client"

import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } backdrop-blur-md`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <span className={`font-bold text-xl ${scrolled ? "text-green-700" : "text-white"}`}>
          SmartFarming
        </span>
        <ul className={`flex gap-4 text-sm font-medium ${scrolled ? "text-gray-800" : "text-white"}`}>
          <li><a href="#problem" className="hover:text-green-500">Problem</a></li>
          <li><a href="#methods" className="hover:text-green-500">Techniques</a></li>
          <li><a href="#impact" className="hover:text-green-500">Impact</a></li>
          <li><a href="#future" className="hover:text-green-500">Future</a></li>
        </ul>
      </nav>
    </header>
  )
}
