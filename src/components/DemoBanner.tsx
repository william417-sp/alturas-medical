import { AlertTriangle } from 'lucide-react'

export default function DemoBanner() {
  return (
    <div className="bg-amber-500 text-amber-950 py-2 px-4 text-center text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span>
          <strong>Propuesta de demostración</strong> — no es el sitio oficial de Alturas Medical CSP
        </span>
      </div>
    </div>
  )
}
