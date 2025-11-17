import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Catalog() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [orderInfo, setOrderInfo] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/assets`)
        const data = await res.json()
        setAssets(data)
      } catch (e) {
        setError('Errore nel caricare il catalogo')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const buy = async (assetId) => {
    if (!email) {
      alert('Inserisci la tua email per ricevere il link di download.')
      return
    }
    const res = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, asset_id: assetId })
    })
    if (!res.ok) {
      alert('Ordine non riuscito')
      return
    }
    const data = await res.json()
    setOrderInfo(data)
  }

  return (
    <section id="catalogo" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Pacchetti scaricabili</h2>
            <p className="text-gray-600 mt-2">Dopo l'acquisto ricevi un link sicuro per scaricare i file.</p>
          </div>
          <div className="flex gap-3 items-center">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="La tua email" className="px-4 py-3 rounded-lg border w-64" />
            <button onClick={async()=>{await fetch(`${baseUrl}/seed`,{method:'POST'}); location.reload()}} className="px-4 py-3 rounded-lg border">Carica demo</button>
          </div>
        </div>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid md:grid-cols-3 gap-6">
          {assets.map((a, idx) => (
            <motion.div key={a._id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:idx*0.05}} viewport={{once:true}}
              className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
              {a.cover_image && (
                <img src={a.cover_image} alt={a.title} className="h-44 w-full object-cover" />
              )}
              <div className="p-5">
                <h3 className="font-semibold text-lg">{a.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{a.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold">€{a.price}</span>
                  <button onClick={()=>buy(a._id)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">
                    Acquista <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {orderInfo && (
          <div className="mt-12 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <p className="font-semibold">Ordine creato!</p>
            <p className="text-sm mt-1">Usa questo link per scaricare: </p>
            <a className="inline-flex items-center gap-2 text-emerald-700 font-mono underline" href={`${baseUrl}/download/${orderInfo.download_token}`} target="_blank" rel="noreferrer">
              {`${baseUrl}/download/${orderInfo.download_token}`} <Download size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
