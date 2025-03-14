
export default {
    name: "Register",
    data() {
        return {
            email: '',
            name: '',
            password: ''
        }
    },
    methods: {
        async registerUser() {

            let user = {
                email: this.email,
                name: this.name,
                password: this.password
            }
        
            try {
                const response = await fetch("http://localhost:8080/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })

                if (response.status === 200) {
                    console.log("Usuário registrado com sucesso");
                } else {
                    console.error("Erro ao cadastrar usuario: " + response.statusText)
                }
            } catch(error) {
                if(error.response && error.response.data) {
                    console.error(error.response.data)
                } else {
                    console.error("Erro ao registrar usuário")
                }
            }
        }
    }
}
