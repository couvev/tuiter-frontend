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