'use strict'
console.log('sono collegato')
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.(vue)
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'ciao mondo!'
      }
    }
  }).mount('#app')


