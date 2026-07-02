import { Link, useParams } from 'wouter'
import { Star, MapPin, CheckCircle, Wrench, Clock, ArrowLeft, Phone } from 'lucide-react'

const technicians = [
  { id: 1, name: 'Rajesh Kumar', specialty: 'Split AC Specialist', rating: 4.9, jobs: 1240, exp: 8, area: 'Shankheshwar Road, Patan', badge: 'Top Rated', reviews: [
    { name: 'Ramesh Patel', rating: 5, text: 'Excellent work! Very professional and thorough.', service: 'Foam-jet Cleaning' },
    { name: 'Priya Shah', rating: 5, text: 'Fixed my AC quickly. Highly recommended!', service: 'AC Repair' },
    { name: 'Kiran Mehta', rating: 4, text: 'Good service, arrived on time.', service: 'Gas Refill' },
  ]},
  { id: 2, name: 'Amit Sharma', specialty: 'Gas Refill Expert', rating: 4.8, jobs: 980, exp: 6, area: 'Patan Chowk, Patan', badge: 'Verified', reviews: [
    { name: 'Suresh Joshi', rating: 5, text: 'Very knowledgeable about gas refill. Great service.', service: 'Gas Refill & Check-up' },
    { name: 'Meena Patel', rating: 5, text: 'Professional and transparent pricing.', service: 'AC Repair' },
  ]},
  { id: 3, name: 'Sunil Patel', specialty: 'Installation Expert', rating: 4.8, jobs: 756, exp: 5, area: 'Siddhraj Nagar, Patan', badge: 'Verified', reviews: [
    { name: 'Dinesh Shah', rating: 5, text: 'Installed 2 ACs perfectly. Clean work.', service: 'AC Installation' },
  ]},
]

export default function TechnicianProfile() {
  const params = useParams<{ id: string }>()
  const id = parseInt(params.id || '1')
  const tech = technicians.find(t => t.id === id) || technicians[0]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/technicians" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0a2540] mb-6 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Technicians
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="gradient-card p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-extrabold">
                {tech.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-extrabold">{tech.name}</h1>
                  <span className="bg-[#00b4d8]/30 text-[#00b4d8] text-xs font-bold px-2 py-0.5 rounded-full border border-[#00b4d8]/40">✓ {tech.badge}</span>
                </div>
                <div className="text-white/70 mb-2">{tech.specialty}</div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-4 h-4 ${i <= Math.round(tech.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`} />
                  ))}
                  <span className="text-sm font-bold ml-1">{tech.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-2xl font-extrabold text-[#0a2540]">{tech.exp}</div>
                <div className="text-xs text-gray-500">Years Exp</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-2xl font-extrabold text-[#0a2540]">{tech.jobs.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Jobs Done</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-2xl font-extrabold text-[#00b4d8]">{tech.rating}</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <MapPin className="w-4 h-4 text-[#00b4d8]" /> {tech.area}
            </div>
            <div className="flex gap-3">
              <Link href="/book" className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors">
                Book This Technician
              </Link>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-[#0a2540] mb-4">Customer Reviews ({tech.reviews.length})</h2>
          <div className="space-y-4">
            {tech.reviews.map((r, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#0a2540] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#0a2540]">{r.name}</div>
                      <div className="flex items-center gap-0.5">
                        {[1,2,3,4,5].map(j => (
                          <Star key={j} className={`w-3 h-3 ${j <= r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-[#00b4d8]/10 text-[#00b4d8] px-2 py-1 rounded-full">{r.service}</span>
                </div>
                <p className="text-gray-600 text-sm">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
