// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { VStepperVertical, VStepperVerticalItem, VStepperVerticalActions } from 'vuetify/labs/VStepperVertical'
import 'vuetify/dist/vuetify-labs.css'
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    blueprint: md3,
    components: {
      VStepperVertical,
      VStepperVerticalItem,
      VStepperVerticalActions
    }
  })
  app.vueApp.use(vuetify)
})
