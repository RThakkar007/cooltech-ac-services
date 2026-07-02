import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Services from './pages/Services'
import Booking from './pages/Booking'
import TechnicianLocator from './pages/TechnicianLocator'
import TechnicianProfile from './pages/TechnicianProfile'
import BookingConfirmation from './pages/BookingConfirmation'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/book" component={Booking} />
          <Route path="/book/:serviceId" component={Booking} />
          <Route path="/booking-confirmation" component={BookingConfirmation} />
          <Route path="/technicians" component={TechnicianLocator} />
          <Route path="/technicians/:id" component={TechnicianProfile} />
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
                <p className="text-gray-600 mb-6">Page not found</p>
                <a href="/" className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">Go Home</a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
