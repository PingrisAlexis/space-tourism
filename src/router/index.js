import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'
import TheCrew from '@/views/TheCrew.vue'
import TheDestinations from '@/views/TheDestinations.vue'
import TheTechnologies from '@/views/TheTechnologies.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TheHome
    },
    {
        path: '/crew',
        name: 'Crew',
        component: TheCrew
    },
    {
        path: '/destination',
        name: 'Destination',
        component: TheDestinations
    },
    {
        path: '/technologie',
        name: 'Technologie',
        component: TheTechnologies
    }
]

const router = createRouter({ 
    history: createWebHistory(), 
    routes 
})

export default router