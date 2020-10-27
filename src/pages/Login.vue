<template>
  <div>
    <p>FIRST</p>
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email">

    <label for="password">Password</label>
    <input type="text" id="password" v-model="password">

    <button @click="login">Log in</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: "login",
  data() {
    return {
      email: null,
      password: null,
    }
  },
  mounted() {

  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    async login() {
      console.log(111)
      await this.signIn({email: this.email, password: this.password})

    }
  }
}
</script>

<style scoped>

</style>