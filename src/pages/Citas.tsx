import { useState } from 'react'
import toast from 'react-hot-toast'
import { 
  Calendar, 
  Phone, 
  Clock, 
  User,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface FormData {
  nombre: string
  telefono: string
  fecha: string
  hora: string
  motivo: string
}

const initialFormData: FormData = {
  nombre: '',
  telefono: '',
  fecha: '',
  hora: '',
  motivo: ''
}

const horasDisponibles = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
]

export default function Citas() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    toast.success(
      '¡Solicitud recibida! Le contactaremos pronto para confirmar su cita.',
      { duration: 5000 }
    )
    
    setFormData(initialFormData)
    setIsSubmitting(false)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Solicitar Cita
          </h1>
          <p className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto">
            Complete el formulario a continuación y nos comunicaremos con usted para confirmar su cita.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 card-shadow">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Formulario de solicitud
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors outline-none"
                        placeholder="Ej: María García"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors outline-none"
                        placeholder="Ej: 787-555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Fecha */}
                    <div>
                      <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Fecha preferida *
                      </label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        required
                        min={today}
                        value={formData.fecha}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors outline-none"
                      />
                    </div>

                    {/* Hora */}
                    <div>
                      <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Hora preferida *
                      </label>
                      <select
                        id="hora"
                        name="hora"
                        required
                        value={formData.hora}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors outline-none bg-white"
                      >
                        <option value="">Seleccione una hora</option>
                        {horasDisponibles.map((hora) => (
                          <option key={hora} value={hora}>{hora}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Motivo */}
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Motivo de la consulta *
                    </label>
                    <textarea
                      id="motivo"
                      name="motivo"
                      required
                      rows={4}
                      value={formData.motivo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors outline-none resize-none"
                      placeholder="Describa brevemente el motivo de su visita..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-coral-500 hover:bg-coral-600 disabled:bg-gray-300 text-white rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Enviar solicitud</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Demo Note */}
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-amber-800 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    <strong>Demo:</strong> Este formulario es solo de demostración. Las solicitudes no se envían. 
                    Para citas reales, llame al <a href="tel:7876575496" className="underline font-medium">(787) 657-5496</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Call CTA */}
              <div className="bg-teal-600 rounded-2xl p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-3">
                  ¿Prefiere llamar?
                </h3>
                <p className="text-teal-100 mb-4">
                  Las llamadas son la forma más rápida de programar su cita.
                </p>
                <a
                  href="tel:7876575496"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-teal-700 rounded-xl font-semibold transition-all hover:bg-teal-50"
                >
                  <Phone className="w-5 h-5" />
                  <span>(787) 657-5496</span>
                </a>
              </div>

              {/* Info Cards */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                  Información importante
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      Traiga su tarjeta de seguro médico
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      Llegue 15 minutos antes de su cita
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      Traiga lista de medicamentos actuales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      Llame si necesita cancelar o reprogramar
                    </span>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-teal-50 rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                  <Clock className="w-5 h-5 inline mr-2" />
                  Horario
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Horario por confirmar
                </p>
                <p className="text-gray-500 text-xs">
                  Llame para verificar disponibilidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
