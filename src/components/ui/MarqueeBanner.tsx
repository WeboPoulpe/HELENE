'use client'

interface MarqueeBannerProps {
  items: string[]
  /** 'dark' = navy bg + rose text | 'light' = off-white bg + navy text */
  variant?: 'dark' | 'light'
  speed?: number // seconds for one full loop
}

export function MarqueeBanner({
  items,
  variant = 'dark',
  speed = 28,
}: MarqueeBannerProps) {
  // Duplicate 3× for a seamless infinite loop regardless of screen width
  const track = [...items, ...items, ...items]

  const isDark = variant === 'dark'

  return (
    <div
      className={`overflow-hidden border-y py-3 ${
        isDark
          ? 'bg-navy border-white/10'
          : 'bg-off-white border-navy/10'
      }`}
      aria-hidden="true"
    >
      <div
        className="flex w-max gap-0"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-6 px-6 text-xs uppercase tracking-widest font-medium whitespace-nowrap ${
              isDark ? 'text-white/50' : 'text-navy/50'
            }`}
          >
            {item}
            <span className={isDark ? 'text-rose' : 'text-rose'}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
