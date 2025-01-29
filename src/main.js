import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import routes from './routes/routes.js'
import { createMemoryHistory, createRouter } from 'vue-router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})

createApp(App)
.use(vuetify)
.use(router)
.mount('#app')
