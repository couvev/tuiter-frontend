<template>
    <div class="login">
      <h1>Login</h1>
      <div class="login-box">
        <input v-model="email" placeholder="Email" type="email" />
        <input v-model="password" placeholder="Senha" type="password" />
        <button @click="login">Entrar</button>
      </div>
    </div>
  </template>
  
  <script>
  import LoginScript from '../js/Login.js'
  export default LoginScript
  </script>
  
  <style src="../css/Login.css"></style>