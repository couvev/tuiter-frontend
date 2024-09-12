<template>
  <div class="home">
    <h1>Bem-vindo ao Tuiter!</h1>
    <div class="post-box">
      <textarea v-model="newPost" placeholder="O que está acontecendo?" rows="3"></textarea>
      <button @click="addPost">Postar</button>
    </div>
    <div class="posts">
      <div v-for="(post, index) in posts" :key="index" class="post">
        {{ post }}
      </div>
    </div>
  </div>
</template>

<script>
import HomeMainScript from '../js/HomeMain.js'
export default HomeMainScript
</script>

<style src="../css/HomeMain.css"></style>