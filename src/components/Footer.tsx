import { Link } from 'react-router-dom'
import { Heart, Phone, MapPin, Clock, AlertCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      {/* Emergency Disclaimer */}
      <div className="bg-coral-600 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>
            <strong>Emergencias:</strong> Para emergencias médicas, llame al <strong>9-1-1</strong>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Alturas Medical CSP</span>
                <span className="block text-xs text-teal-300 -mt-0.5">Medicina Familiar</span>
              </div>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed">
              Cuidando a las familias de Río Grande y comunidades cercanas con atención médica de calidad.
            </p>
            <p className="mt-3 text-teal-300 text-sm">
              Se habla español • English welcome
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-teal-200 hover:text-white transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/citas" className="text-teal-200 hover:text-white transition-colors text-sm">
                  Solicitar cita
                </Link>
              </li>
              <li>
                <Link to="/seguros" className="text-teal-200 hover:text-white transition-colors text-sm">
                  Seguros aceptados
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-teal-200 hover:text-white transition-colors text-sm">
                  Aviso de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:7876575496" className="text-white hover:text-teal-200 transition-colors">
                    (787) 657-5496
                  </a>
                  <span className="block text-teal-300">Teléfono</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-teal-200">
                  Calle 1 A23, Alturas de Río Grande<br />
                  Río Grande, PR 00745
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Horario</h3>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-teal-200">
                <p className="mb-2">Horario por confirmar</p>
                <p className="text-teal-300 text-xs">
                  Llame para verificar disponibilidad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-teal-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-teal-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Alturas Medical CSP. NPI: 1467710483
            </p>
            <p className="text-amber-400 text-sm font-medium text-center md:text-right">
              Sitio demo propuesto — no afiliado aún a Alturas Medical CSP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
