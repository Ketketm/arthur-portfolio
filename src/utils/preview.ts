/**
 * Map of inspiration site URLs → local screenshot path.
 * Screenshots are captured by `scripts/capture-screenshots.mjs` and stored
 * in `public/inspirations/{slug}.jpg`.
 */
const SCREENSHOTS: Record<string, string> = {
  'https://carve.fr/':                          '/inspirations/carve.jpg',
  'http://www.dessenamarianne.com/':            '/inspirations/dessenamarianne.jpg',
  'https://pastene-avocat.fr/':                 '/inspirations/pastene-avocat.jpg',
  'https://www.khalvadjian-avocats.com/':       '/inspirations/khalvadjian-avocats.jpg',
  'https://cabinet-alessandrello.vercel.app/':  '/inspirations/alessandrello.jpg',
  'https://www.hka-avocat.com/':                '/inspirations/hka-avocat.jpg',
  'https://talt.fr/':                           '/inspirations/talt.jpg',
  'https://www.orwl.fr/':                       '/inspirations/orwl.jpg',
  'https://www.archers.fr/':                    '/inspirations/archers.jpg',
  'https://amplitude-law.be/':                  '/inspirations/amplitude-law.jpg',
}

/**
 * Resolve a screenshot path for a given site URL. Returns undefined if no
 * local screenshot is registered — caller should fall back to a gradient.
 */
export function previewUrl(url: string, _width?: number): string | undefined {
  void _width
  return SCREENSHOTS[url]
}
