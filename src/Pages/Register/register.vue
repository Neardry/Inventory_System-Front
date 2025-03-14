<template>
    <section class="flex registerClass">
        <form @submit.prevent="registerUser" class="flex">
                <label>Nome da empresa</label>
                <input id="name" v-model="name" type="text">
                <label>E-mail</label>
                <input id="email" v-model="email" type="email">
                <label>senha</label>
                <input id="password" v-model="password" type="password">
                <div>
                    <button type="submit" class="button">Registrar</button>
                    <RouterLink to="/" class="button">Voltar para login</RouterLink>
                </div>
        </form>
    </section>
</template>

<script src="./register.js">
</script>

<style src="./styles.css"></style>