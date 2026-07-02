import { Link } from 'wouter'
import { Star, Clock, ArrowRight, Wind, Wrench, Thermometer, Settings, Zap, Snowflake, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 1, slug: 'foam-jet-cleaning', name: 'Foam-jet Cleaning', icon: Wind,
    price: '₹499', duration: '60 min', rating: 4.9, reviews: 312,
    desc: 'Deep foam-jet cleaning for 1–5 ACs. Removes dust, bacteria & improves cooling efficiency by up to 30%.',
    includes: ['Foam-jet wash of indoor unit', 'Filter cleaning & sanitization', 'Drainage pipe check', 'Performance test after cleaning'],
    options: [
      { label: '1 AC', price: '₹499' }, { label: '2 ACs', price: '₹899' },
      { label: '3 ACs', price: '₹1,299' }, { label: '4 ACs', price: '₹1,599' }, { label: '5 ACs', price: '₹1,899' },
    ]
  },
  {
    id: 2, slug: 'ac-repair', name: 'AC Repair', icon: Wrench,
    price: '₹299', duration: '45–90 min', rating: 4.8, reviews: 256,
    desc: 'Expert diagnosis and repair for all AC brands. No cooling, noise issues, water leakage & more.',
    includes: ['Full system diagnosis', 'Fault identification & repair', 'Electrical connection check', 'Test run after repair'],
    options: []
  },
  {
    id: 3, slug: 'gas-refill', name: 'Gas Refill & Check-up', icon: Thermometer,
    price: '₹799', duration: '60 min', rating: 4.9, reviews: 198,
    desc: 'Refrigerant top-up with full system health check. Restore optimal cooling performance.',
    includes: ['Refrigerant level check', 'Gas top-up (R22/R32/R410A)', 'Leak detection', 'Full system health report'],
    options: []
  },
  {
    id: 4, slug: 'ac-installation', name: 'AC Installation', icon: Settings,
    price: '₹999', duration: '2–3 hrs', rating: 4.8, reviews: 145,
    desc: 'Professional installation for split & window ACs. Includes piping, bracket & electrical work.',
    includes: ['Wall bracket installation', 'Copper piping (up to 3m)', 'Electrical connection', 'Test run & demo'],
    options: []
  },
  {
    id: 5, slug: 'ac-uninstallation', name: 'AC Uninstallation', icon: Zap,
    price: '₹399', duration: '60 min', rating: 4.7, reviews: 89,
    desc: 'Safe removal and packing of your AC unit. Ideal for shifting or replacement.',
    includes: ['Safe gas recovery', 'Outdoor & indoor unit removal', 'Pipe capping', 'Packing for transport'],
    options: []
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            <Snowflake className="w-4 h-4 text-[#00b4d8]" /> AC Services — Patan, Gujarat
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">All AC Services</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Certified technicians, transparent pricing, fully equipped. Book any service in under 2 minutes.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map(s => (
            <div key={s.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="gradient-card p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{s.name}</h2>
                      <div className="flex items-center gap-3 mt-1 text-white/70 text-sm">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{s.duration}</span>
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />{s.rating} ({s.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold">{s.price}</div>
                    <div className="text-white/60 text-xs">onwards</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-[#0a2540] mb-2">What's included:</div>
                  <ul className="space-y-1">
                    {s.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                {s.options.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#0a2540] mb-2">Options:</div>
                    <div className="flex flex-wrap gap-2">
                      {s.options.map(o => (
                        <span key={o.label} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
                          {o.label} — {o.price}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-3">
                  <Link href={`/book/${s.id}`} className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors btn-scale">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={`/book/${s.id}`} className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
