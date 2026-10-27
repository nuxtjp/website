import documentContent from './content.mjs'
import { validateExperience } from './experience.mts'
import assert from 'node:assert/strict'
import { validateNavigation } from './navigation.mts'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export function validateContent(data) {
  assert.match(data.siteId, /^[a-z][a-z0-9-]+$/)
  assert.match(data.origin, /^https:\/\/[a-z0-9.-]+$/)
  assert.ok(['ja', 'en'].includes(data.defaultLocale))
  const locales = ['ja', 'en']
  const paths = data.locales.en.pages.map(page => page.path).sort()
  for (const locale of locales) {
    const content = data.locales[locale]
    validateExperience(JSON.parse(readFileSync(new URL('./experience.json', import.meta.url), 'utf8'))[locale], content)
    assert.equal(content.locale, locale)
    assert.match(content.accent, /^#[a-f0-9]{6}$/)
    assert.match(content.icon, /^\/brand\/[a-zA-Z0-9/_.-]+\.(png|svg)$/)
    assert.ok(content.brand && content.navigation.length > 0 && content.navigation.length <= 5)
    const current = content.pages.map(page => page.path).sort()
    assert.deepEqual(current, paths, `${locale}: translation routes differ`)
    assert.equal(new Set(current).size, current.length, 'duplicate routes')
    for (const required of ['/', '/docs', '/journal', '/privacy', '/security', '/sitemap']) assert.ok(current.includes(required), `missing ${required}`)
    const checkLink = item => {
      assert.ok(item.title?.trim(), 'empty link title')
      if (item.href.startsWith('/')) assert.ok(current.includes(item.href), `broken internal link: ${item.href}`)
      else { const url = new URL(item.href); assert.equal(url.protocol, 'https:'); assert.equal(url.username + url.password, '') }
      if (item.icon) assert.match(item.icon, /^\/brand\/[a-zA-Z0-9/_.-]+\.(svg|png)$/)
    }
    validateNavigation(content)
    content.navigation.forEach(checkLink)
    if (content.secondaryAction) checkLink(content.secondaryAction)
    if (data.siteId === 'nuxtjp') {
      assert.ok(content.resources.every(item => item.href.startsWith('https://github.com/nuxtjp/')), 'NuxtJP catalog must contain only NuxtJP libraries')
      const learn = content.pages.find(page => page.path === '/learn')
      const owned = content.pages.find(page => page.path === '/nuxtjp')
      assert.ok(learn && owned, 'framework and NuxtJP need separate entry pages')
      assert.ok(content.navigation.some(link => link.href === '/learn') && content.navigation.some(link => link.href === '/nuxtjp'))
      assert.ok(learn.sections.flatMap(section => section.links || []).some(link => link.href === 'https://nuxt.com'))
      assert.ok(owned.sections.flatMap(section => section.links || []).some(link => link.href === '/modules'))
    }
    content.resources.forEach(item => { checkLink(item); assert.ok(item.category && item.summary) })
    for (const page of content.pages) {
      assert.match(page.path, /^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/)
      assert.equal(page.status, 'published', 'draft content must stay outside the bundle')
      assert.ok(page.title.trim() && page.summary.trim())
      assert.ok(['page', 'home', 'catalog', 'journal', 'article'].includes(page.kind))
      if (page.kind === 'article') assert.ok(page.category && page.sections.length, 'empty published article')
      for (const section of page.sections) { assert.ok(section.title && section.text); section.links?.forEach(checkLink) }
      if (content.resources.length && page.path.startsWith(content.navigation[0].href + '/')) {
        const links = page.sections.flatMap(section => section.links || [])
        const knownSource = content.resources.some(resource => links.some(link => link.href === resource.href))
        const frameworkReference = data.siteId === 'nuxtjp' && (
          (page.path === '/learn/introduction' && links.some(link => link.href === 'https://github.com/nuxt/nuxt')) ||
          (page.path === '/learn/modules' && links.some(link => link.href === 'https://nuxt.com/docs/4.x/guide/concepts/modules'))
        )
        assert.ok(knownSource || frameworkReference, `missing concrete repository link: ${page.path}`)
      }
    }
  }
  return { site: data.siteId, locales: 2, pages: paths.length * 2, brokenInternalLinks: 0, bundledDrafts: 0 }
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(validateContent(documentContent)))
}
