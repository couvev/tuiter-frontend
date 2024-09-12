export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        if (this.email.trim() && this.password.trim()) {
          try {
            const response = await fetch(`${process.env.VUE_APP_API_URL}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: this.email,
                password: this.password
              })
            })
            if (response.ok) {
              alert('Login bem-sucedido!')
              this.$router.push('/')
            } else {
              const errorData = await response.json()
              alert(errorData.error || 'Erro ao fazer login.')
            }
          } catch (error) {
            alert('Erro ao fazer login.')
          }
        } else {
          alert('Por favor, preencha todos os campos.')
        }
      }
    }
  }