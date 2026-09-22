import { Link } from 'react-router-dom'
import { 
  Shield, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react'

const insurancePlans = [
  { name: 'Triple-S', category: 'Comercial' },
  { name: 'Medicare', category: 'Federal' },
  { name: 'Medicaid / Mi Salud', category: 'Gobierno' },
  { name: 'First Medical', category: 'Comercial' },
  { name: 'MMM', category: 'Medicare Advantage' },
  { name: 'PMC', category: 'Comercial' },
  { name: 'Humana', category: 'Comercial' },
  { name: 'MCS', category: 'Comercial' },
]

const faqs = [
  {
    question: '¿Qué debo traer a mi cita?',
    answer: 'Traiga su tarjeta de seguro médico, identificación con foto, lista de medicamentos actuales, y cualquier referido médico si aplica.'
  },
  {
    question: '¿Aceptan pacientes sin seguro?',
    answer: 'Llame a la oficina para discutir opciones de pago para pacientes sin cobertura de seguro médico.'
  },
  {
    question: '¿Necesito referido para una cita?',
    answer: 'Esto depende de su plan de seguro. Algunos planes HMO requieren referido del médico primario. Verifique con su aseguradora.'
  },
]

export default function Seguros() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Seguros y Planes Médicos
          </h1>
          <p className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto">
            Trabajamos con los principales planes de seguro médico en Puerto Rico para facilitar su atención.
          </p>
        </div>
      </section>

      {/* Insurance List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            <div className="mb-10 p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-1">Lista de ejemplo</h3>
                  <p className="text-amber-700 text-sm">
                    Esta lista es solo un ejemplo representativo. Comuníquese con la clínica directamente 
                    al <a href="tel:7876575496" className="underline font-medium">(787) 657-5496</a> para 
                    confirmar qué planes de seguro aceptan actualmente.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 text-center">
              <Shield className="w-6 h-6 inline mr-2 text-teal-600" />
              Planes médicos aceptados <span className="text-amber-600 text-base font-normal">(ejemplo)</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {insurancePlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 card-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{plan.name}</span>
                    <span className="block text-xs text-gray-500">{plan.category}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Verify Insurance */}
            <div className="bg-teal-50 rounded-2xl p-6 md:p-8 text-center">
              <HelpCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                ¿No ve su plan de seguro?
              </h3>
              <p className="text-gray-600 mb-6">
                Llámenos para verificar si aceptamos su plan de seguro médico.
              </p>
              <a
                href="tel:7876575496"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar para verificar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para programar su cita?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctenos hoy para verificar su cobertura y programar su consulta.
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
