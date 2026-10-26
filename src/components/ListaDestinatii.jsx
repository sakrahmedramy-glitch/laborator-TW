import DestinatieCard from './DestinatieCard.jsx'

export default function ListaDestinatii({ destinatii, onToggle, onDelete }) {
  if (destinatii.length === 0) {
    return <p className="info">Nu există nicio destinație.</p>
  }

  return (
    <section className="lista" aria-label="Destinații">
      {destinatii.map((destinatie) => (
        <DestinatieCard
          key={destinatie.id}
          destinatie={destinatie}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}
