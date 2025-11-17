import { Menu, ShoppingCart, Star } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl mt-3 px-4 bg-white/70 backdrop-blur border border-white/40 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 grid place-items-center text-white font-bold">♞</div>
            <span className="font-extrabold tracking-tight">ChessReseller</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#catalogo" className="hover:text-gray-900">Catalogo</a>
            <a href="#come-funziona" className="hover:text-gray-900">Come funziona</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <Star size={16} /> Recensioni
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">
              <ShoppingCart size={16} /> Carrello
            </button>
            <button className="md:hidden p-2 rounded-lg border border-gray-200"><Menu size={18} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
