#!/usr/bin/env node
/**
 * Capture screenshots of inspiration sites using Playwright + system Chrome.
 * Run: node scripts/capture-screenshots.mjs
 *
 * Output: public/inspirations/{slug}.png at 1440x900.
 * Waits for networkidle + 2s settle for animations / SPA rendering.
 */
import { chromium } from 'playwright-core'
import { mkdirSync } from 'fs'
import { resolve } from 'path'

const CHROME =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT = resolve('public/inspirations')
mkdirSync(OUT, { recursive: true })

const sites = [
  { slug: 'carve',               url: 'https://carve.fr/' },
  { slug: 'dessenamarianne',     url: 'http://www.dessenamarianne.com/' },
  { slug: 'pastene-avocat',      url: 'https://pastene-avocat.fr/' },
  { slug: 'khalvadjian-avocats', url: 'https://www.khalvadjian-avocats.com/' },
  { slug: 'alessandrello',       url: 'https://cabinet-alessandrello.vercel.app/' },
  { slug: 'hka-avocat',          url: 'https://www.hka-avocat.com/' },
  { slug: 'talt',                url: 'https://talt.fr/' },
  { slug: 'orwl',                url: 'https://www.orwl.fr/' },
  { slug: 'archers',             url: 'https://www.archers.fr/' },
  { slug: 'amplitude-law',       url: 'https://amplitude-law.be/' },
]

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
})

const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.5,
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
})

async function capture({ slug, url }) {
  const out = `${OUT}/${slug}.png`
  console.log(`📸 ${slug.padEnd(22)} → ${url}`)
  const page = await context.newPage()
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
    // Settle for late animations / lazy images
    await page.waitForTimeout(2500)
    // Try to dismiss common cookie banners (best-effort, ignore failures)
    for (const sel of [
      'button:has-text("Accepter")',
      'button:has-text("Tout accepter")',
      'button:has-text("J\'accepte")',
      'button:has-text("Accept all")',
      'button:has-text("OK")',
      '#axeptio_btn_acceptAll',
      '.cc-allow',
    ]) {
      try {
        await page.click(sel, { timeout: 800 })
        await page.waitForTimeout(500)
        break
      } catch {}
    }
    await page.screenshot({
      path: out,
      type: 'png',
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    })
    console.log(`   ✓ ${slug}`)
  } catch (err) {
    console.error(`   ✗ ${slug}: ${err.message}`)
  } finally {
    await page.close()
  }
}

for (const site of sites) {
  await capture(site)
}

await browser.close()
console.log('\n✓ Done.')
