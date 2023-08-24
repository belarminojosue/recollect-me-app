import { MetadataRoute } from 'next'

import logo from '../public/2x.png'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mindu',
    short_name: 'Mindu',
    description: 'Mindu Application',
    start_url: '/',
    id: 'com.mindu',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/1x.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/1x.png',
        sizes: '163x163',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/2x.png',
        sizes: '326x326',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/4x.png',
        sizes: '652x652',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  }
}
