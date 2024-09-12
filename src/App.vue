<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/login" class="navbar-item">Login</router-link>
          <router-link to="/signup" class="navbar-item">Signup</router-link>
        </div>
        <div class="navbar-end">
          <UserLogout v-if="isAuthenticated" />
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import UserLogout from './views/UserLogout.vue'

export default {
  name: 'App',
  components: {
    UserLogout
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem('isAuthenticated') === 'true'
    }
  }
}
</script>

<style src="./css/App.css"></style>