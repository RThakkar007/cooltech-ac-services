import { useState } from 'react'
import { Link } from 'wouter'
import { Snowflake, CheckCircle, Calendar, MapPin, CreditCard, ArrowRight, ArrowLeft, Clock, Star } from 'lucide-react'

const services = [
  { id: 1, name: 'Foam-jet Cleaning', price: 499, duration: '60 min', rating: 4.9 },
  { id: 2, name: 'AC Repair', price: 299, duration: '45–90 min', rating: 4.8 },
  { id: 3, name: 'Gas Refill & Check-up', price: 799, duration: '60 min', rating: 4.9 },
  { id: 4, name: 'AC Installation', price: 999, duration: '2–3 hrs', rating: 4.8 },
  { id: 5, name: 'AC Uninstallation', price: 399, duration: '60 min', rating: 4.7 },
]

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const steps = ['Select Service', 'Date & Time', 'Address', 'Payment']

export default function Booking() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [address, setAddress] = useState({ line1: '', area: '', city: 'Patan', pincode: '384265' })
  const [confirmed, setConfirmed] = useState(false)

  const service = services.find(s => s.id === selected)

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#0a2540] mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Your AC service has been booked. A technician will be assigned shortly.</p>
          <div className="bg-gray-50 rounded-xl p-4 text-left mb-6 space-y-2">
            <div className="flex justify-between text-sm"><span className="text-gray-500">Service</span><span className="font-semibold">{service?.name}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Date</span><span className="font-semibold">{date}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Time</span><span className="font-semibold">{slot}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-500">Amount</span><span className="font-bold text-[#00b4d8]">₹{service?.price}</span></div>
          </div>
          <div className="bg-[#0a2540] rounded-xl p-4 text-white text-left mb-6">
            <div className="text-xs text-white/60 mb-2">Assigned Technician</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00b4d8] rounded-full flex items-center justify-center font-bold">R</div>
              <div>
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="flex items-center gap-1 text-xs text-white/70"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> 4.9 · 8 yrs exp</div>
              </div>
              <div className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">En Route</div>
            </div>
          </div>
          <Link href="/technicians" className="block w-full bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors mb-3">
            Track Technician Live
          </Link>
          <Link href="/" className="block w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 text-[#00b4d8] rounded-full px-4 py-1.5 text-sm font-semibold mb-3">
            <Snowflake className="w-4 h-4" /> Book AC Service
          </div>
          <h1 className="text-2xl font-extrabold text-[#0a2540]">Book Your Service</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-2 ${i <= step ? 'text-[#00b4d8]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${i < step ? 'bg-[#00b4d8] border-[#00b4d8] text-white' : i === step ? 'border-[#00b4d8] text-[#00b4d8]' : 'border-gray-300 text-gray-400'}`}>
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className="hidden sm:block text-xs font-medium">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-8 sm:w-16 h-0.5 mx-2 ${i < step ? 'bg-[#00b4d8]' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {/* Step 0: Select Service */}
          {step === 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#0a2540] mb-4">Select a Service</h2>
              <div className="space-y-3">
                {services.map(s => (
                  <button key={s.id} onClick={() => setSelected(s.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${selected === s.id ? 'border-[#00b4d8] bg-[#00b4d8]/5' : 'border-gray-100 hover:border-gray-200'}`}>
                    <div className="text-left">
                      <div className="font-semibold text-[#0a2540]">{s.name}</div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{s.duration}</span>
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />{s.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#0a2540]">₹{s.price}</div>
                      {selected === s.id && <CheckCircle className="w-5 h-5 text-[#00b4d8] ml-auto mt-1" />}
                    </div>
                  </button>
                ))}
              </div>
              <button disabled={!selected} onClick={() => setStep(1)}
                className="w-full mt-6 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-scale">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-[#00b4d8]" /> Select Date & Time</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00b4d8]" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(t => (
                    <button key={t} onClick={() => setSlot(t)}
                      className={`py-2 rounded-lg text-sm font-medium border transition-all ${slot === t ? 'bg-[#00b4d8] text-white border-[#00b4d8]' : 'border-gray-200 text-gray-700 hover:border-[#00b4d8]'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(0)} className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button disabled={!date || !slot} onClick={() => setStep(2)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] disabled:opacity-50 disabled:cursor-not-allowed btn-scale">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-[#00b4d8]" /> Service Address</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                  <input value={address.line1} onChange={e => setAddress({...address, line1: e.target.value})} placeholder="House/Flat No., Street Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00b4d8]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area / Locality</label>
                  <input value={address.area} onChange={e => setAddress({...address, area: e.target.value})} placeholder="Area, Locality"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00b4d8]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input value={address.city} readOnly className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 text-gray-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                    <input value={address.pincode} onChange={e => setAddress({...address, pincode: e.target.value})} placeholder="384265"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00b4d8]" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button disabled={!address.line1 || !address.area} onClick={() => setStep(3)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] disabled:opacity-50 disabled:cursor-not-allowed btn-scale">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold text-[#0a2540] mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5 text-[#00b4d8]" /> Order Summary & Payment</h2>
              <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-gray-500">Service</span><span className="font-semibold">{service?.name}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Date</span><span className="font-semibold">{date}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Time</span><span className="font-semibold">{slot}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Address</span><span className="font-semibold text-right max-w-[180px]">{address.line1}, {address.area}, {address.city}</span></div>
                <div className="border-t border-gray-200 pt-2 flex justify-between font-bold"><span>Total</span><span className="text-[#00b4d8] text-lg">₹{service?.price}</span></div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4 text-sm text-blue-700 flex items-center gap-2">
                <CreditCard className="w-4 h-4 shrink-0" />
                Secure payment powered by Stripe. Test card: 4242 4242 4242 4242
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button onClick={() => setConfirmed(true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-xl font-bold hover:bg-[#0096b7] transition-colors btn-scale">
                  Pay ₹{service?.price} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
