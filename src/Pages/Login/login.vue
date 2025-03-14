
<template>
    <div class="loginClass"> 

        <h1>Bem vindo</h1>
        <form>
            <label for="">Insira seu email</label>
            <input placeholder="email@gmail.com" type="text">
            <label for="">Insira sua senha</label>
            <input placeholder="senha" type="text">

            <button class="button" type="button">Entrar</button>
        </form>
        <RouterLink class="button" to="/register">Cadastrar</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
name: "Login"
}
</script>

<style src="./styles.css"></style>
