import { Link } from 'react-router-dom'
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Activity,
  Thermometer,
  FileCheck,
  Calendar,
  Phone
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Evaluación y tratamiento de condiciones médicas comunes en adultos. Incluye diagnóstico, tratamiento y seguimiento de enfermedades agudas y crónicas.',
    items: ['Diagnóstico de enfermedades', 'Tratamiento de infecciones', 'Manejo de síntomas', 'Referencias a especialistas']
  },
  {
    icon: Users,
    title: 'Medicina Familiar',
    description: 'Atención médica integral para pacientes de todas las edades, desde adolescentes hasta adultos mayores, con enfoque en la continuidad del cuidado.',
    items: ['Atención a toda la familia', 'Historial médico familiar', 'Cuidado preventivo', 'Seguimiento continuo']
  },
  {
    icon: Heart,
    title: 'Chequeos de Rutina',
    description: 'Exámenes médicos preventivos periódicos para mantener su salud y detectar condiciones tempranamente.',
    items: ['Examen físico completo', 'Evaluación de signos vitales', 'Análisis de laboratorio', 'Evaluación de riesgos']
  },
  {
    icon: Activity,
    title: 'Manejo de Condiciones Crónicas',
    description: 'Monitoreo y tratamiento continuo de condiciones de salud crónicas para mejorar su calidad de vida.',
    items: ['Hipertensión', 'Diabetes', 'Colesterol alto', 'Seguimiento regular']
  },
  {
    icon: Thermometer,
    title: 'Atención de Enfermedades Agudas',
    description: 'Tratamiento oportuno para enfermedades y síntomas que requieren atención médica inmediata.',
    items: ['Resfriados y gripe', 'Infecciones', 'Dolores agudos', 'Lesiones menores']
  },
  {
    icon: FileCheck,
    title: 'Certificados Médicos',
    description: 'Documentación médica para trabajo, escuela u otros propósitos oficiales.',
    items: ['Certificados de salud', 'Evaluaciones médicas', 'Documentación oficial', 'Formularios requeridos']
  },
]

export default function Servicios() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto">
            Ofrecemos atención médica completa en medicina familiar y general para cuidar de su salud y la de su familia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 card-shadow card-shadow-hover transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-800">
            <strong>Nota:</strong> Los servicios mostrados son representativos de una práctica de medicina familiar general. 
            Contacte la clínica directamente para confirmar servicios específicos disponibles.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Necesita una consulta?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Estamos aquí para atenderle. Llámenos o solicite una cita hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7876575496"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>(787) 657-5496</span>
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
      </section>
    </div>
  )
}
