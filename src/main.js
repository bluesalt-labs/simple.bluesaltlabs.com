import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'

// Set the current year in the footer to today's date to make sure it's current. 
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').innerHTML = (new Date()).getFullYear();
});

// Mount the vue app
createApp(App).mount('#vue-app')
