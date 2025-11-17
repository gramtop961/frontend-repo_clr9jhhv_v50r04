import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Catalog from './components/Catalog'
import HowItWorks from './components/HowItWorks'
import Mascot from './components/Mascot'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0b] via-[#101014] to-[#0a0a0b] text-zinc-50">
      <Navbar />
      <Mascot />
      <main className="pt-24 space-y-24">
        <div id="hero"><Hero /></div>
        <Sections />
        <Catalog />
        <HowItWorks />
        <footer id="faq" className="py-12 text-center text-sm text-zinc-400 border-t border-white/10">
          © {new Date().getFullYear()} ChessReseller — Serietà, eleganza e risultati.
        </footer>
      </main>
    </div>
  )
}

export default App
