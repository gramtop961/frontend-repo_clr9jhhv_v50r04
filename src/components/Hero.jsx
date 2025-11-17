import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-white mb-6">
            <span className="text-xs uppercase tracking-wider">Nuovo 2025</span>
            <span className="h-1 w-1 rounded-full bg-white/70" />
            <span className="text-xs">Marketplace di fornitori per reselling</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]">
            ChessReseller
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl">
            Trova fornitori verificati di profumi, scarpe, vestiti ed elettronica. Acquista pacchetti digitali scaricabili con directory, listini e script di outreach.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#catalogo" className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow hover:shadow-lg transition">Esplora Catalogo</a>
            <a href="#come-funziona" className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition">Come funziona</a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
    </section>
  )
}
