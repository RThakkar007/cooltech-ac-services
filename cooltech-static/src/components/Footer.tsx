import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#00b4d8] rounded-lg flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">CoolTech</div>
                <div className="text-xs text-[#00b4d8]">AC Services</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Patan's most trusted AC service experts. Certified technicians at your doorstep.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00b4d8] transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00b4d8] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00b4d8] transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#00b4d8] mb-4">AC Services</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {['Foam-jet Cleaning', 'AC Repair', 'Gas Refill & Check-up', 'AC Installation', 'AC Uninstallation'].map(s => (
                <li key={s}><Link href="/services" className="hover:text-[#00b4d8] transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-[#00b4d8] mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Patan <span className="text-green-400 text-xs">Live</span>
              </li>
              {['Mehsana', 'Siddhpur', 'Unjha', 'Visnagar'].map(c => (
                <li key={c} className="flex items-center gap-2 text-white/40">
                  <span className="w-2 h-2 bg-white/20 rounded-full"></span>
                  {c} <span className="text-xs">Coming soon</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#00b4d8] mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00b4d8] mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00b4d8] mt-0.5 shrink-0" />
                <span>support@cooltech.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00b4d8] mt-0.5 shrink-0" />
                <span>Patan, Gujarat 384265, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2024 CoolTech AC Services. All rights reserved.</p>
          <p>Serving Patan, Gujarat, India</p>
        </div>
      </div>
    </footer>
  )
}
