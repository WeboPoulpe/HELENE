import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/mon_offre',
        destination: '/offre',
        permanent: true,
      },
      {
        source: '/mon_offre/',
        destination: '/offre',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
