<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'UserLogout',
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3700b3;
}
</style>