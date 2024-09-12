export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    async signup() {
      if (this.email.trim() && this.username.trim() && this.password.trim()) {
        try {
          const response = await fetch(`${process.env.VUE_APP_API_URL}/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              username: this.username,
              password: this.password
            })
          })
          if (response.ok) {
            alert('Conta criada com sucesso!')
          } else {
            const errorData = await response.json()
            alert(errorData.error || 'Erro ao criar conta.')
          }
        } catch (error) {
          alert('Erro ao criar conta.')
        }
      } else {
        alert('Por favor, preencha todos os campos.')
      }
    }
  }
}