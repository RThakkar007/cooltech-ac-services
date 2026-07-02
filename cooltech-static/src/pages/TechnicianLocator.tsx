import { useState } from 'react'
import { Link } from 'wouter'
import { MapPin, Star, Clock, CheckCircle, Phone, Navigation } from 'lucide-react'

const technicians = [
  { id: 1, name: 'Rajesh Kumar', specialty: 'Split AC Specialist', rating: 4.9, jobs: 1240, exp: 8, distance: '1.2 km', eta: '8 min', status: 'available', area: 'Shankheshwar Road, Patan' },
  { id: 2, name: 'Amit Sharma', specialty: 'Gas Refill Expert', rating: 4.8, jobs: 980, exp: 6, distance: '2.1 km', eta: '12 min', status: 'available', area: 'Patan Chowk, Patan' },
  { id: 3, name: 'Sunil Patel', specialty: 'Installation Expert', rating: 4.8, jobs: 756, exp: 5, distance: '3.4 km', eta: '18 min', status: 'busy', area: 'Siddhraj Nagar, Patan' },
  { id: 4, name: 'Vikram Singh', specialty: 'Window AC Expert', rating: 4.7, jobs: 623, exp: 4, distance: '4.0 km', eta: '22 min', status: 'available', area: 'Station Road, Patan' },
  { id: 5, name: 'Pradeep Joshi', specialty: 'Multi-brand Technician', rating: 4.6, jobs: 445, exp: 3, distance: '5.2 km', eta: '28 min', status: 'available', area: 'Hemchandracharya Road, Patan' },
]

export default function TechnicianLocator() {
  const [located, setLocated] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold mb-2">Find Technicians Near You</h1>
          <p className="text-white/70">GPS-enabled technician locator for Patan, Gujarat</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="relative bg-gradient-to-br from-[#e8f4f8] to-[#d0eaf5] h-72 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0a2540] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#00b4d8]" />
              </div>
              <p className="text-[#0a2540] font-semibold mb-1">Patan, Gujarat, India</p>
              <p className="text-gray-500 text-sm mb-4">23.8493°N, 72.1266°E</p>
              {!located ? (
                <button onClick={() => setLocated(true)}
                  className="inline-flex items-center gap-2 bg-[#00b4d8] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors">
                  <Navigation className="w-4 h-4" /> Find Technicians Near Me
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold">
                  <CheckCircle className="w-4 h-4" /> {technicians.filter(t => t.status === 'available').length} Technicians Found Nearby
                </div>
              )}
            </div>
            {/* Technician dots on map */}
            {located && (
              <>
                <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" title="Rajesh Kumar" />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" title="Amit Sharma" />
                <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg" title="Sunil Patel (Busy)" />
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" title="Vikram Singh" />
              </>
            )}
          </div>
        </div>

        {/* Technician List */}
        <h2 className="text-xl font-bold text-[#0a2540] mb-4">
          {located ? `${technicians.length} Technicians in Patan` : 'All Technicians in Patan'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicians.map(t => (
            <div key={t.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0a2540] to-[#00b4d8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#0a2540]">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.specialty}</div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${t.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {t.status === 'available' ? '● Available' : '● Busy'}
                </span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.round(t.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-sm font-semibold text-[#0a2540] ml-1">{t.rating}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-[#0a2540]">{t.exp} yrs</div>
                  <div className="text-gray-500">Exp</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-[#0a2540]">{t.distance}</div>
                  <div className="text-gray-500">Away</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-[#00b4d8]">{t.eta}</div>
                  <div className="text-gray-500">ETA</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                <MapPin className="w-3 h-3" /> {t.area}
              </div>
              <div className="flex gap-2">
                <Link href={`/technicians/${t.id}`} className="flex-1 text-center bg-[#0a2540] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#0d3460] transition-colors">
                  View Profile
                </Link>
                <Link href="/book" className="flex-1 text-center bg-[#00b4d8] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#0096b7] transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
