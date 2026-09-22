import { Link } from 'react-router-dom'
import { 
  Shield, 
  FileText, 
  Lock,
  AlertCircle,
  Phone
} from 'lucide-react'

export default function Privacidad() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-lg md:text-xl text-teal-700 max-w-2xl mx-auto">
            Su privacidad y la confidencialidad de su información médica es nuestra prioridad.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demo Disclaimer */}
          <div className="mb-10 p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">Aviso de demostración</h3>
                <p className="text-amber-700 text-sm">
                  Este es un aviso de privacidad de demostración para propósitos ilustrativos solamente.
                  Este sitio web es una propuesta de demostración y no representa las políticas oficiales 
                  de Alturas Medical CSP. Para información oficial sobre prácticas de privacidad, 
                  contacte directamente a la clínica.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 m-0">
                Compromiso con su privacidad
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              En Alturas Medical CSP, nos comprometemos a proteger la privacidad y confidencialidad 
              de su información de salud protegida (PHI) de acuerdo con la Ley de Portabilidad y 
              Responsabilidad del Seguro de Salud (HIPAA) y las leyes aplicables de Puerto Rico.
            </p>

            {/* HIPAA Section */}
            <div className="bg-teal-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-teal-600" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 m-0">
                  Prácticas de privacidad HIPAA
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Uso y divulgación:</strong> Su información médica puede ser utilizada para 
                    tratamiento, pago y operaciones de atención médica según lo permitido por la ley.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Sus derechos:</strong> Usted tiene derecho a acceder, corregir y solicitar 
                    restricciones sobre su información médica.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Autorización:</strong> Se requiere su autorización escrita para divulgaciones 
                    no relacionadas con tratamiento, pago u operaciones.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Protección:</strong> Implementamos medidas de seguridad administrativas, 
                    físicas y técnicas para proteger su información.
                  </span>
                </li>
              </ul>
            </div>

            {/* Website Privacy */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-gray-600" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 m-0">
                  Privacidad del sitio web (Demo)
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Este sitio web de demostración:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
                  <span>No recopila información personal real</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
                  <span>El formulario de citas es solo de demostración y no envía datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
                  <span>No tiene acceso a ningún sistema de registros médicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
                  <span>No representa las políticas oficiales de la clínica</span>
                </li>
              </ul>
            </div>

            {/* Contact for Privacy */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                Preguntas sobre privacidad
              </h3>
              <p className="text-gray-600 mb-4">
                Para preguntas sobre las prácticas de privacidad reales de Alturas Medical CSP, 
                comuníquese directamente con la clínica:
              </p>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600" />
                <a 
                  href="tel:7876575496" 
                  className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  (787) 657-5496
                </a>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
