import contactConfig from './contact-form.config.json'
import consentConfig from './consent.config.json'
import type { ModuleOptions as ContactOptions } from '@nuxtjp/contact-form'
import { fileURLToPath } from 'node:url'
import sitePages from './site/module'
import siteBranding from './branding'
const enableContact = !process.env.SITE_ID || process.env.SITE_ID === 'nuxtjp'
export default defineNuxtConfig({
  devtools: { enabled: false },
  contactForm: enableContact ? contactConfig as ContactOptions : undefined, modules: [...(enableContact ? [['@nuxtjp/localized-site/consent', { ...consentConfig, defaultLocale: 'ja' }] as [string, Record<string, unknown>], '@nuxtjp/contact-form'] : []),
    siteBranding,
    ['@nuxtjp/localized-site', {
      contentRoot: '../content/nuxtjp',
      maintenance: false,
      presentation: { theme: 'nuxtjp', scope: 'organization' }
    }],
    sitePages
  ],
  nitro: { publicAssets: [{ dir: fileURLToPath(new URL('../content/nuxtjp/public', import.meta.url)), maxAge: 0 }], prerender: { failOnError: true } }
})
