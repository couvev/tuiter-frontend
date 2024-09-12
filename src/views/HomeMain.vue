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
export default {
  name: 'HomeMain',
  data() {
    return {
      newPost: '',
      posts: []
    }
  },
  methods: {
    addPost() {
      if (this.newPost.trim()) {
        this.posts.unshift(this.newPost.trim())
        this.newPost = ''
      }
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
}

.post-box {
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #1e1e1e;
  color: #ffffff;
  resize: none;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #6200ea;
  color: #ffffff;
  cursor: pointer;
}

button:hover {
  background-color: #3700b3;
}

.posts {
  margin-top: 20px;
}

.post {
  background-color: #1e1e1e;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
}
</style>