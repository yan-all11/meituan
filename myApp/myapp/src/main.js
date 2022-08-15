import { createApp} from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import Vant from 'vant'
import 'vant/lib/index.css'
createApp(App).use(store).use(router).use(Vant).mount('#app')
 
