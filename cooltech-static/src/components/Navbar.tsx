import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Snowflake, Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'AC Services' },
    { href: '/technicians', label: 'Find Technician' },
    { href: '/book', label: 'Book Now' },
  ]

  return (
    <nav className="bg-[#0a2540] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 bg-[#00b4d8] rounded-lg flex items-center justify-center">
              <Snowflake className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="leading-tight">CoolTech</div>
              <div className="text-xs font-normal text-[#00b4d8] leading-tight">AC Services</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#00b4d8] ${location === l.href ? 'text-[#00b4d8]' : 'text-white/80'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </a>
            <Link href="/book" className="bg-[#00b4d8] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0096b7] transition-colors btn-scale">
              Book Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0d3460] px-4 pb-4 space-y-2">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-white/80 hover:text-[#00b4d8]"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)} className="block w-full text-center bg-[#00b4d8] text-white px-4 py-2 rounded-lg text-sm font-semibold mt-2">
            Book Service
          </Link>
        </div>
      )}
    </nav>
  )
}
