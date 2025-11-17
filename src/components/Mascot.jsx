import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Floating knight mascot that "jumps" between sections as user scrolls
export default function Mascot() {
  const sectionIds = useMemo(() => [
    'hero',
    'professionalita',
    'cosa-dentro',
    'catalogo',
    'come-funziona',
  ], [])

  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
              setActive(id)
            }
          })
        },
        { threshold: [0.4, 0.6] }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  const positions = {
    hero: 80,
    professionalita: 220,
    'cosa-dentro': 360,
    catalogo: 500,
    'come-funziona': 640,
  }

  return (
    <div className="pointer-events-none fixed right-4 top-0 z-[45] hidden lg:block">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          aria-hidden
          initial={{ y: positions[active] - 40, x: 0, rotate: -10, scale: 0.95, opacity: 0 }}
          animate={{ y: positions[active], x: [0, -6, 0], rotate: [0, -8, 0], scale: [1, 1.08, 1], opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 140, damping: 12 }}
          className="relative"
        >
          <div className="pointer-events-auto select-none w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 shadow-xl ring-1 ring-white/10 grid place-items-center">
            <span className="text-4xl" role="img" aria-label="cavallo">♞</span>
          </div>
          <motion.div
            layout
            className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs font-medium text-zinc-700 bg-white/80 backdrop-blur px-2.5 py-1 rounded-full border border-zinc-200 shadow-sm"
          >
            {labelFor(active)}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function labelFor(id){
  switch(id){
    case 'hero': return 'Benvenuto'
    case 'professionalita': return 'Professionalità'
    case 'cosa-dentro': return 'Cosa c\'è dentro'
    case 'catalogo': return 'Pacchetti'
    case 'come-funziona': return 'Come funziona'
    default: return 'ChessReseller'
  }
}
