import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-tow-red mb-4">TowDaddy</h3>
            <p className="text-muted-foreground mb-4">
              Professional 24/7 towing and roadside assistance services across Ontario. 
              Safe, reliable, and always ready to help when you need us most.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+16479497729" className="hover:text-tow-red transition-colors">
                (647) 949-7729
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/services" className="block text-muted-foreground hover:text-tow-red transition-colors">
                Services
              </Link>
              <Link href="/coverage-areas" className="block text-muted-foreground hover:text-tow-red transition-colors">
                Coverage Areas
              </Link>
              <Link href="/pricing" className="block text-muted-foreground hover:text-tow-red transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-tow-red transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <nav className="space-y-2">
              <Link href="/faq" className="block text-muted-foreground hover:text-tow-red transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-tow-red transition-colors">
                Contact
              </Link>
              <a href="tel:+16479497729" className="block text-muted-foreground hover:text-tow-red transition-colors">
                Emergency Line
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TowDaddy. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Licensed & Insured • 24/7 Emergency Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}