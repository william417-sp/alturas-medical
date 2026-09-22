import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/citas', label: 'Citas' },
  { to: '/seguros', label: 'Seguros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="glass-header sticky top-0 z-50 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-teal-800 text-lg">Alturas Medical</span>
              <span className="block text-xs text-teal-600 -mt-0.5">Río Grande, PR</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-teal-100 text-teal-800'
                    : 'text-gray-600 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="tel:7876575496"
              className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium text-sm transition-colors shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Llamar</span>
            </a>
            <Link
              to="/citas"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-coral-500 hover:bg-coral-600 text-white rounded-xl font-medium text-sm transition-colors shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar cita</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-teal-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-teal-100 text-teal-800'
                      : 'text-gray-600 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/citas"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-coral-500 text-white rounded-xl font-medium transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar cita</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
