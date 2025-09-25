'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-tow-red">
              TowDaddy
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-tow-red transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-tow-red transition-colors">
              Services
            </Link>
            <Link href="/coverage-areas" className="text-foreground hover:text-tow-red transition-colors">
              Coverage Areas
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-tow-red transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-foreground hover:text-tow-red transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-foreground hover:text-tow-red transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-foreground hover:text-tow-red transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+16479497729" className="flex items-center">
              <Button className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call Now</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}