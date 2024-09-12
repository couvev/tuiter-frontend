<template>
    <div class="signup">
      <h1>Criar Conta</h1>
      <div class="signup-box">
        <input v-model="email" placeholder="Email" type="email" />
        <input v-model="username" placeholder="Usuário" type="text" />
        <input v-model="password" placeholder="Senha" type="password" />
        <button @click="signup">Criar Conta</button>
      </div>
    </div>
  </template>
  
  <script>
  import SignupScript from '../js/Signup.js'
  export default SignupScript
  </script>
  
  <style src="../css/Signup.css"></style>