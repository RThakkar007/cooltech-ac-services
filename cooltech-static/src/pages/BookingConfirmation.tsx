import { Link } from 'wouter'
import { CheckCircle, Star, MapPin, Phone, Navigation, Clock } from 'lucide-react'

export default function BookingConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-lg mx-auto px-4">
        {/* Success */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-[#0a2540] mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-1">Booking ID: <span className="font-mono font-bold text-[#00b4d8]">#CT-2024-001</span></p>
          <p className="text-gray-500 text-sm">Payment of <strong>₹499</strong> received successfully</p>
        </div>

        {/* Technician Card */}
        <div className="bg-[#0a2540] rounded-2xl p-6 text-white mb-6">
          <div className="text-xs text-white/60 uppercase tracking-wider mb-4">Assigned Technician</div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-[#00b4d8] rounded-full flex items-center justify-center text-2xl font-extrabold">R</div>
            <div className="flex-1">
              <div className="font-bold text-lg">Rajesh Kumar</div>
              <div className="text-white/70 text-sm">Split AC Specialist</div>
              <div className="flex items-center gap-1 mt-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                <span className="text-sm ml-1 font-semibold">4.9</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30 mb-2">En Route</div>
              <div className="text-white/70 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> ETA: 12 min</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="font-bold">8 yrs</div>
              <div className="text-white/60 text-xs">Experience</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="font-bold">1,240</div>
              <div className="text-white/60 text-xs">Jobs Done</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <MapPin className="w-4 h-4 text-[#00b4d8]" /> Currently at Shankheshwar Road, Patan
          </div>
          <div className="flex gap-3">
            <Link href="/technicians" className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors">
              <Navigation className="w-4 h-4" /> Track Live
            </Link>
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="font-bold text-[#0a2540] mb-4">Booking Details</h2>
          <div className="space-y-3 text-sm">
            {[
              { label: 'Service', value: 'Foam-jet Cleaning' },
              { label: 'Date', value: 'Today' },
              { label: 'Time Slot', value: '10:00 AM' },
              { label: 'Address', value: 'Shankheshwar Road, Patan, Gujarat 384265' },
              { label: 'Amount Paid', value: '₹499', highlight: true },
            ].map(d => (
              <div key={d.label} className="flex justify-between">
                <span className="text-gray-500">{d.label}</span>
                <span className={`font-semibold ${d.highlight ? 'text-[#00b4d8]' : 'text-[#0a2540]'}`}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/" className="block w-full text-center border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
