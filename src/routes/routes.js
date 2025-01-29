import Main from '../pages/Main/Main.vue'
import Projetos from '../pages/Projetos/Projetos.vue'

const routes = [
  { 
    path: '/',
    children: [
      { path: '', component: Main },
      { path: 'projetos', component: Projetos },
    ]
  }
]

export default routes
