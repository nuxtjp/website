import assert from 'node:assert/strict'

type Link = { href: string }
type Section = { links?: Link[] }
export type Content = { navigation: Link[]; pages: { path: string; sections: Section[] }[] }
export const requiredPaths = ["/learn/modules", "/use-cases", "/modules"]

export function validateNavigation(content: Content) {
  const pages = new Map(content.pages.map(page => [page.path, page]))
  const links = (path: string) => pages.get(path)!.sections.flatMap(section => section.links ?? [])
  const reached = new Set<string>()
  const pending = ['/', ...content.navigation.map(link => link.href)]
  while (pending.length) {
    const path = pending.pop()!
    if (path === '/sitemap' || reached.has(path)) continue
    const page = pages.get(path)
    if (!page) continue
    reached.add(path)
    pending.push(...links(path).map(link => link.href))
  }
  for (const path of requiredPaths) assert.ok(reached.has(path), `unreachable without sitemap: ${path}`)
  assert.ok(links('/learn/modules').some(link => link.href === 'https://nuxt.com/docs/4.x/guide/concepts/modules'), 'purpose: framework guide needs an official reference')
  assert.ok(links('/learn/modules').some(link => link.href === 'https://nuxt.com/modules'), 'purpose: framework catalog is separate')
  assert.ok(links('/nuxtjp').some(link => link.href === '/modules'), 'purpose: owned modules need their own entry')
}
