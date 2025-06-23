"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
