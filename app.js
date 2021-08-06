 const app = Vue.createApp({
     template: '<h1>Hello {{firstName}}</h1>', // declarative rendering double curly braces, similar to interpolation in React
     data() { // a function that returns an object
         return {
             firstName: 'John',
         } 
     },
 })

 app.mount('#app')