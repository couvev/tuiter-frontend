export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (this.username.trim() && this.password.trim()) {
          // Lógica de login aqui
          alert(`Usuário: ${this.username}, Senha: ${this.password}`)
        } else {
          alert('Por favor, preencha todos os campos.')
        }
      }
    }
  }