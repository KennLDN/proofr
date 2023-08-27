import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouseChimney, faGamepad, faMoon, faCloudMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)

library.add(faHouseChimney, faGamepad, faMoon, faCloudMoon, faSun, faBars)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
