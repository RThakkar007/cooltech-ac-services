import { Link } from 'wouter'
import { Snowflake, Star, Shield, Wrench, Zap, MapPin, Clock, CheckCircle, ArrowRight, Wind, Thermometer, Settings, ChevronRight, Phone } from 'lucide-react'

const services = [
  { id: 1, name: 'Foam-jet Cleaning', icon: Wind, price: '₹499', duration: '60 min', rating: 4.9, reviews: 312, desc: 'Deep foam-jet cleaning for 1–5 ACs. Removes dust, bacteria & improves cooling efficiency.' },
  { id: 2, name: 'AC Repair', icon: Wrench, price: '₹299', duration: '45–90 min', rating: 4.8, reviews: 256, desc: 'Expert diagnosis and repair for all AC brands. No cooling, noise issues, water leakage & more.' },
  { id: 3, name: 'Gas Refill & Check-up', icon: Thermometer, price: '₹799', duration: '60 min', rating: 4.9, reviews: 198, desc: 'Refrigerant top-up with full system health check. Restore optimal cooling performance.' },
  { id: 4, name: 'AC Installation', icon: Settings, price: '₹999', duration: '2–3 hrs', rating: 4.8, reviews: 145, desc: 'Professional installation for split & window ACs. Includes piping, bracket & electrical work.' },
  { id: 5, name: 'AC Uninstallation', icon: Zap, price: '₹399', duration: '60 min', rating: 4.7, reviews: 89, desc: 'Safe removal and packing of your AC unit. Ideal for shifting or replacement.' },
]

const reviews = [
  { name: 'Ramesh Patel', location: 'Patan', rating: 5, text: 'Excellent service! The technician arrived on time and cleaned my AC thoroughly. Cooling improved significantly.', service: 'Foam-jet Cleaning' },
  { name: 'Priya Shah', location: 'Patan', rating: 5, text: 'Very professional team. Fixed my AC gas leak quickly. Transparent pricing, no hidden charges at all.', service: 'Gas Refill & Check-up' },
  { name: 'Kiran Mehta', location: 'Patan', rating: 4, text: 'Good service. The technician was knowledgeable and explained everything clearly. Will book again.', service: 'AC Repair' },
  { name: 'Suresh Joshi', location: 'Patan', rating: 5, text: 'Installed 2 ACs in my new home. Clean work, no mess left behind. Highly recommended!', service: 'AC Installation' },
]

const technicians = [
  { name: 'Rajesh Kumar', exp: 8, jobs: 1240, rating: 4.9, badge: 'Top Rated', specialty: 'Split AC Specialist' },
  { name: 'Amit Sharma', exp: 6, jobs: 980, rating: 4.8, badge: 'Verified', specialty: 'Gas Refill Expert' },
  { name: 'Sunil Patel', exp: 5, jobs: 756, rating: 4.8, badge: 'Verified', specialty: 'Installation Expert' },
]

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const sz = size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5'
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className={`${sz} ${i <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <MapPin className="w-4 h-4 text-[#00b4d8]" />
                <span>Now Serving <strong>Patan, Gujarat</strong></span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Expert AC Services,<br />
                <span className="text-[#00b4d8]">On Demand</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Patan's most trusted AC service experts — at your doorstep. Certified technicians for repair, installation, cleaning & more. Transparent pricing, no hidden charges.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, label: 'Transparent Pricing' },
                  { icon: CheckCircle, label: 'Trained Experts' },
                  { icon: Wrench, label: 'Fully Equipped' },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm">
                    <b.icon className="w-4 h-4 text-[#00b4d8]" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0096b7] transition-colors btn-scale">
                  <Snowflake className="w-5 h-5" /> Book AC Service
                </Link>
                <Link href="/technicians" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  <MapPin className="w-5 h-5" /> Find Technician
                </Link>
              </div>
            </div>

            {/* City Selector Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-wider mb-4">Service Area</div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#00b4d8]" />
                  <span className="font-semibold">Patan, Gujarat, India</span>
                </div>
                <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-500/30">Active</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#00b4d8] text-white text-sm px-3 py-1 rounded-full font-medium">Patan</span>
              </div>
              <p className="text-white/50 text-sm mb-5">🚀 Coming soon: Mehsana, Siddhpur, Unjha, Visnagar & more</p>
              <Link href="/book" className="block w-full text-center bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors btn-scale">
                Find AC Services in Patan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d3460] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '2K+', label: 'Happy Customers' },
              { value: '20+', label: 'Expert Technicians' },
              { value: '4.8★', label: 'Average Rating' },
              { value: '45 Min', label: 'Avg Response Time' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-[#00b4d8]">{s.value}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 text-[#00b4d8] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Snowflake className="w-4 h-4" /> AC Services
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] mb-4">Our AC Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional AC services by certified technicians. Transparent pricing, no hidden charges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="gradient-card p-5 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-1 text-xs font-semibold">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {s.rating}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <div className="flex items-center gap-3 mt-1 text-white/70 text-sm">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{s.duration}</span>
                    <span>{s.reviews} reviews</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-extrabold text-[#0a2540]">{s.price}</span>
                      <span className="text-gray-400 text-sm ml-1">onwards</span>
                    </div>
                    <Link href={`/book/${s.id}`} className="flex items-center gap-1.5 bg-[#00b4d8] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0096b7] transition-colors btn-scale">
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#0a2540] text-[#0a2540] px-6 py-3 rounded-xl font-semibold hover:bg-[#0a2540] hover:text-white transition-colors">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] mb-4">How It Works</h2>
            <p className="text-gray-600">Book your AC service in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Service', desc: 'Select from our range of AC services and pick a convenient time slot.', icon: Snowflake },
              { step: '02', title: 'Track Technician', desc: 'Get real-time GPS tracking of your assigned technician with live ETA updates.', icon: MapPin },
              { step: '03', title: 'Service Done', desc: 'Certified technician arrives fully equipped. Pay securely after service completion.', icon: CheckCircle },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-[#00b4d8]/10 rounded-2xl flex items-center justify-center mx-auto">
                    <s.icon className="w-8 h-8 text-[#00b4d8]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#0a2540] text-white text-xs font-bold rounded-full flex items-center justify-center">{s.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technicians */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] mb-4">Our Expert Technicians</h2>
            <p className="text-gray-600">Certified, background-verified professionals serving Patan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicians.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a2540] to-[#00b4d8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0a2540]">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.specialty}</div>
                    <span className="inline-block bg-[#00b4d8]/10 text-[#00b4d8] text-xs font-semibold px-2 py-0.5 rounded-full mt-1">✓ {t.badge}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <StarRating rating={t.rating} />
                  <span className="text-sm font-semibold text-[#0a2540] ml-1">{t.rating}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center text-sm">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-[#0a2540]">{t.exp} yrs</div>
                    <div className="text-gray-500">Experience</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-[#0a2540]">{t.jobs.toLocaleString()}</div>
                    <div className="text-gray-500">Jobs Done</div>
                  </div>
                </div>
                <Link href={`/technicians/${i+1}`} className="block w-full text-center mt-4 border border-[#0a2540] text-[#0a2540] py-2 rounded-lg text-sm font-semibold hover:bg-[#0a2540] hover:text-white transition-colors">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/technicians" className="inline-flex items-center gap-2 bg-[#0a2540] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0d3460] transition-colors">
              <MapPin className="w-4 h-4" /> Find Technicians Near Me
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] mb-4">What Patan Says</h2>
            <p className="text-gray-600">Real reviews from our customers in Patan, Gujarat</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0a2540] rounded-full flex items-center justify-center text-white font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a2540]">{r.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{r.location}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-[#00b4d8]/10 text-[#00b4d8] px-2 py-1 rounded-full font-medium">{r.service}</span>
                </div>
                <StarRating rating={r.rating} size="md" />
                <p className="text-gray-700 mt-3 leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Snowflake className="w-12 h-12 text-[#00b4d8] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Book Your AC Service?</h2>
          <p className="text-white/70 text-lg mb-8">Join 2,000+ happy customers in Patan. Certified technicians, transparent pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0096b7] transition-colors btn-scale">
              <Snowflake className="w-5 h-5" /> Book Now
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
