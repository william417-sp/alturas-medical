import { Link } from 'react-router-dom'
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Stethoscope, 
  Heart, 
  Users, 
  CheckCircle,
  ArrowRight,
  Shield,
  Clock
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Atención médica integral para adultos y adolescentes.',
  },
  {
    icon: Users,
    title: 'Medicina Familiar',
    description: 'Cuidado continuo para toda la familia, en todas las etapas de la vida.',
  },
  {
    icon: Heart,
    title: 'Chequeos Preventivos',
    description: 'Exámenes de rutina y evaluaciones para mantener su salud óptima.',
  },
]

const benefits = [
  'Atención personalizada y cercana',
  'Ubicación conveniente en Río Grande',
  'Se habla español e inglés',
  'Compromiso con su bienestar',
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-teal-700 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Río Grande, Puerto Rico</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 leading-tight mb-6">
                Su salud,{' '}
                <span className="text-teal-600">nuestra prioridad</span>
              </h1>
              <p className="text-lg md:text-xl text-teal-700 mb-8 leading-relaxed">
                Alturas Medical CSP ofrece atención médica familiar de calidad en el corazón de Río Grande. 
                Dr. David W. Colon-Golderos, MD y su equipo están comprometidos con el bienestar de su familia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7876575496"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar ahora</span>
                </a>
                <Link
                  to="/citas"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-coral-500 hover:bg-coral-600 text-white rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Solicitar cita</span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl card-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-gray-900">Alturas Medical CSP</h3>
                    <p className="text-teal-600">Medicina Familiar y General</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <Shield className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Atención de confianza</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Citas disponibles</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Para toda la familia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos atención médica completa para cuidar de usted y su familia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 card-shadow card-shadow-hover transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Alturas Medical?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En Alturas Medical CSP, entendemos que elegir un proveedor de atención médica es una decisión importante. 
                Nos dedicamos a brindar un cuidado excepcional con un toque personal.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  Dr. David W. Colon-Golderos, MD
                </h3>
                <p className="text-teal-600 font-medium mb-4">Director Médico</p>
                <p className="text-gray-600 text-sm">
                  Medicina Familiar y General
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Visítenos en Río Grande
                </h2>
                <p className="text-teal-100 text-lg mb-6">
                  Estamos ubicados en Alturas de Río Grande, listos para atenderle.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-teal-200" />
                    <span>Calle 1 A23, Alturas de Río Grande, Río Grande, PR 00745</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-200" />
                    <a href="tel:7876575496" className="hover:text-teal-200 transition-colors">
                      (787) 657-5496
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:7876575496"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold transition-all hover:bg-teal-50"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Llamar</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Calle+1+A23+Alturas+de+Rio+Grande+Rio+Grande+PR+00745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-xl font-semibold transition-all"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="aspect-video bg-teal-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-teal-200 mx-auto mb-3" />
                    <p className="text-teal-200 text-sm">
                      Alturas de Río Grande, PR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
