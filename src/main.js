// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


document.addEventListener('DOMContentLoaded', function () {

  // Set the current year in the footer to today's date to make sure it's current. 
  document.getElementById('year').innerHTML((new Date()).getFullYear());

});
