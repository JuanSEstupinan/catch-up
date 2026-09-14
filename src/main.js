import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n.js';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import '@primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(i18n)
    .use(PrimeVue, { ripple: true, theme: { preset: Material }, license: primeUiLicenseKey })
    .mount('#app')
