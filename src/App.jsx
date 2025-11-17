import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Catalog />
        <HowItWorks />
        <footer id="faq" className="py-12 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ChessReseller — Cavallo che salta da fornitore a fornitore 🐎♞
        </footer>
      </main>
    </div>
  )
}

export default App
