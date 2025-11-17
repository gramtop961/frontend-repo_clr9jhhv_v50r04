import { motion } from 'framer-motion'
import { Shield, Zap, Download, CreditCard } from 'lucide-react'

export default function HowItWorks(){
  const steps = [
    {icon: <Shield className="text-indigo-600"/>, title:'Fornitori verificati', desc:'Solo directory aggiornate con contatti reali e materiali pronti all’uso.'},
    {icon: <CreditCard className="text-indigo-600"/>, title:'Acquisto semplice', desc:'Paga e ricevi subito un link sicuro con token valido 24h.'},
    {icon: <Download className="text-indigo-600"/>, title:'Download istantaneo', desc:'Scarica i pacchetti con limiti anti-abuso e backup via email.'},
    {icon: <Zap className="text-indigo-600"/>, title:'Focus 2025', desc:'Template, script AI e automazioni pronte per scalare.'},
  ]

  return (
    <section id="come-funziona" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Come funziona</h2>
        <p className="text-gray-600 text-center mt-2">Dalla scelta all'accesso ai file in tre click.</p>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.05}} viewport={{once:true}}
              className="p-6 rounded-2xl border bg-white shadow-sm">
              <div className="w-10 h-10 grid place-items-center rounded-lg bg-indigo-50 mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
