
<template id="app">
  <RouterView />
</template>

  <script>
    import { RouterView } from 'vue-router';
    import Login from './Pages/Login/login.vue'
  
    export default {
      components: {
        Login
      }
    }
  </script>