<template>
  <section class="auth-container">
    <div class="auth-tabs">
      <a class="auth-tabs__item active">Авторизация</a>
      <RouterLink to="/registration" class="auth-tabs__item">Регистрация</RouterLink>
    </div>
    <form>
      <EvolAuthInput required label="Email" v-model="email" />
      <EvolAuthInput required label="Пароль" v-model="password"/>

      <button type="button" class="btn btn-main auth-btn" @click="login">Авторизация</button>

      <div class="login-social">
        <p class="login-social__title">Войти в систему с</p>
        <div id="uLogin" class="login-social__list">
          <div class="login-social__item">
            <a href="'vkontakte'">
              <img :src="'img/icons/social/fb.png'" alt="">
            </a>
          </div>
          <div class="login-social__item">
            <a href="'vkontakte'">
              <img :src="'img/icons/social/vk.png'" alt="">
            </a>
          </div>
          <div class="login-social__item">
            <a href="'google'">
              <img :src="'img/icons/social/gp.png'" alt="">
            </a>
          </div>
          <div class="login-social__item">
            <a href="'mailru'">
              <img :src="'img/icons/social/mr.png'" alt="">
            </a>
          </div>
          <div class="login-social__item">
            <a href="'yandex'">
              <img :src="'img/icons/social/ydx.png'" alt="">
            </a>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import EvolAuthInput from '@/components/EvolAuthInput';
import { mapActions } from "vuex"

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
    }),
    async login() {
      console.log(111)
      await this.signIn({ email: this.email, password: this.password, device_name: 'tips' })
    },
  },
  components: { EvolAuthInput },
}
</script>
<style scoped>
.login-social__list {
  display: flex;
  justify-content: space-between;
  width: 270px;
  margin-bottom: 65px;
}
.login-social__title {
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #7D7D7D;
  margin-bottom: 16px;
}
.login-social__item {
  margin: 0 8px;
  width: 38px;
  height: 38px;
}
.login-social__item img {
  width: 100%;
  height: 100%;
}
</style>
