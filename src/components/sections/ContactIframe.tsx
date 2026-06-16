import { BOOKING_URL } from '@/lib/constants'

export function ContactIframe() {
  return (
    <div>
      <p className="mb-8 text-center font-serif text-xl italic text-navy">
        Choisissez un créneau qui vous convient
      </p>
      <div className="overflow-hidden border border-navy/10">
        <iframe
          src={BOOKING_URL}
          width="100%"
          height="720"
          title="Réserver un rendez-vous avec Hélène Fouré"
          className="border-0"
        />
      </div>
    </div>
  )
}
