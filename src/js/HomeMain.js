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