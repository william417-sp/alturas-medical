import { Link } from 'react-router-dom'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Calendar,
  Navigation,
  Printer
} from 'lucide-react'

export default function Contacto() {
  const googleMapsUrl = 'https://maps.google.com/?q=Calle+1+A23+Alturas+de+Rio+Grande+Rio+Grande+PR+00745'
  const googleMapsEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.9!2d-65.83!3d18.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDIyJzQ4LjAiTiA2NcKwNDknNDguMCJX!5e0!3m2!1sen!2spr!4v1'

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Contáctenos
          </h1>
          <p className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto">
            Estamos aquí para atenderle. Encuentre nuestra información de contacto y ubicación.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h2>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <a 
                      href="tel:7876575496" 
                      className="text-teal-600 hover:text-teal-700 text-lg font-medium transition-colors"
                    >
                      (787) 657-5496
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Llamadas y citas</p>
                  </div>
                </div>
              </div>

              {/* Fax */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Printer className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fax</h3>
                    <span className="text-gray-700 text-lg">(787) 657-5342</span>
                    <p className="text-gray-500 text-sm mt-1">Documentos médicos</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <address className="not-italic text-gray-700">
                      Calle 1 A23<br />
                      Alturas de Río Grande<br />
                      Río Grande, PR 00745
                    </address>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-sm font-medium mt-2 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horario de oficina</h3>
                    <p className="text-gray-600">Horario por confirmar</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Llame para verificar disponibilidad
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:7876575496"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar ahora</span>
                </a>
                <Link
                  to="/citas"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-coral-500 hover:bg-coral-600 text-white rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Solicitar cita</span>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Ubicación
              </h2>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-shadow">
                <div className="aspect-square md:aspect-video lg:aspect-square">
                  <iframe
                    src={googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Alturas Medical CSP"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-teal-50">
                  <div className="flex items-center gap-2 text-teal-700">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Alturas de Río Grande, Puerto Rico
                    </span>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  <Navigation className="w-5 h-5 inline mr-2" />
                  Cómo llegar
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Ubicados en la urbanización Alturas de Río Grande. Desde la carretera PR-3, 
                  tome la salida hacia Río Grande y siga las indicaciones hacia Alturas.
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Obtener direcciones en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Notice */}
      <section className="py-12 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <Mail className="w-5 h-5 text-teal-600" />
            <span className="text-gray-700 font-medium">Se habla español • English welcome</span>
          </div>
          <p className="text-gray-600">
            Nuestro equipo está listo para atenderle en español e inglés.
          </p>
        </div>
      </section>
    </div>
  )
}
