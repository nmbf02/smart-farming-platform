"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } backdrop-blur-md`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-3 relative">
        {/* Logo o título */}
        <span className={`font-bold text-xl ${scrolled ? "text-green-700" : "text-white"}`}>
          SmartFarming
        </span>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-green-700" : "text-white"}`}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menú en escritorio */}
        <ul
          className={`hidden lg:flex gap-6 text-sm font-medium ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <li><a href="#problem" className="hover:text-green-500">Problem</a></li>
          <li><a href="#methods" className="hover:text-green-500">Techniques</a></li>
          <li><a href="#impact" className="hover:text-green-500">Impact</a></li>
          <li><a href="#future" className="hover:text-green-500">Future</a></li>
        </ul>

        {/* Menú móvil animado */}
        <AnimatePresence>
          {open && (
            <motion.ul
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-16 right-4 bg-white p-6 rounded-lg shadow-lg z-40 flex flex-col gap-4 text-sm font-medium text-gray-800"
            >
              <li><a href="#problem" onClick={() => setOpen(false)} className="hover:text-green-500">Problem</a></li>
              <li><a href="#methods" onClick={() => setOpen(false)} className="hover:text-green-500">Techniques</a></li>
              <li><a href="#impact" onClick={() => setOpen(false)} className="hover:text-green-500">Impact</a></li>
              <li><a href="#future" onClick={() => setOpen(false)} className="hover:text-green-500">Future</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay oscuro y borroso */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
