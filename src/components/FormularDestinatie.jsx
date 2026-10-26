import { useState } from 'react'

export default function FormularDestinatie({ onAdd }) {
  const [oras, setOras] = useState('')
  const [tara, setTara] = useState('')
  const [zile, setZile] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!oras.trim() || !tara.trim() || !zile) {
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      oras: oras.trim(),
      tara: tara.trim(),
      zile: Number(zile),
      vizitat: false,
    })
    setOras('')
    setTara('')
    setZile('')
  }

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <input
        type="text"
        value={oras}
        onChange={(event) => setOras(event.target.value)}
        placeholder="Oraș"
        aria-label="Oraș"
        required
      />
      <input
        type="text"
        value={tara}
        onChange={(event) => setTara(event.target.value)}
        placeholder="Țară"
        aria-label="Țară"
        required
      />
      <input
        type="number"
        min="1"
        step="1"
        value={zile}
        onChange={(event) => setZile(event.target.value)}
        placeholder="Zile"
        aria-label="Număr de zile"
        required
      />
      <button type="submit">Adaugă destinația</button>
    </form>
  )
}
