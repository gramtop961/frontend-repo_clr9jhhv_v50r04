import { motion } from 'framer-motion'
import { BadgeCheck, Building2, PackageOpen, Sparkles } from 'lucide-react'

export default function Sections(){
  return (
    <div className="space-y-24">
      <section id="professionalita" className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">Professionalità & Serietà</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">Selezioniamo fornitori solidi e verificati. Ogni elenco è aggiornato, con contatti diretti, note su MOQ, tempi e rese. Puntiamo su eleganza e risultati: niente rumore, solo partner affidabili.</p>
              <ul className="mt-6 space-y-3 text-zinc-700">
                <li className="flex items-start gap-3"><BadgeCheck className="text-emerald-600 mt-1"/> Verifica manuale e storico ordini</li>
                <li className="flex items-start gap-3"><BadgeCheck className="text-emerald-600 mt-1"/> Aggiornamenti periodici e QA</li>
                <li className="flex items-start gap-3"><BadgeCheck className="text-emerald-600 mt-1"/> Focus sul margine reale e scalabilità</li>
              </ul>
            </motion.div>
            <motion.div initial={{opacity:0, scale:0.96}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-2xl p-8 bg-gradient-to-br from-zinc-900 to-zinc-700 text-white shadow-xl ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <Building2 className="text-white/80"/>
                <h3 className="font-semibold">Rete di fornitori</h3>
              </div>
              <p className="mt-3 text-white/80 text-sm">Profumi, calzature, apparel, elettronica: filiere affidabili per solidi ritorni.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-white/10 px-3 py-2">Profumi</div>
                <div className="rounded-lg bg-white/10 px-3 py-2">Scarpe</div>
                <div className="rounded-lg bg-white/10 px-3 py-2">Apparel</div>
                <div className="rounded-lg bg-white/10 px-3 py-2">Elettronica</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="cosa-dentro" className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, scale:0.96}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="order-2 lg:order-1 rounded-2xl p-8 bg-white shadow-sm border">
              <h3 className="text-xl font-semibold">Cosa trovi nei pacchetti</h3>
              <ul className="mt-4 space-y-2 text-zinc-700 text-sm">
                <li className="flex items-start gap-2"><PackageOpen className="text-indigo-600 mt-1"/> Directory contatti e recapiti</li>
                <li className="flex items-start gap-2"><PackageOpen className="text-indigo-600 mt-1"/> Listini, MOQ, note logistiche</li>
                <li className="flex items-start gap-2"><PackageOpen className="text-indigo-600 mt-1"/> Script outreach + template ordini</li>
                <li className="flex items-start gap-2"><PackageOpen className="text-indigo-600 mt-1"/> Bonus 2025: prompt AI utili al reselling</li>
              </ul>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="order-1 lg:order-2">
              <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl">
                <div className="flex items-center gap-3"><Sparkles className="opacity-90"/><span className="font-semibold">Valore immediato</span></div>
                <p className="mt-3 text-white/90 text-sm">Tutto l'essenziale per partire senza perdite di tempo, con asset pronti all'uso.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
