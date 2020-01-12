<template>
  <b-container>
    <b-form @submit="onLogin">
      <b-row align-h="center" class="pb-3">
        <b-col cols="4">
          <label align="left" class="pb-2 w-100">
            Login:
            <b-input type="text" :value="name" @input.native="onInput($event, 'name', 'login')" :state="login"/>
            <b-form-invalid-feedback>Обязательно для заполнения</b-form-invalid-feedback>
          </label>
        </b-col>
      </b-row>
      <b-row align-h="center" class="pb-4">
        <b-col cols="4">
          <label align="left" class="pb-2 w-100">
            Password:
            <b-input type="password" :value="pass" @input.native="onInput($event, 'pass', 'password')" :state="password"/>
            <b-form-invalid-feedback>Обязательно для заполнения</b-form-invalid-feedback>
          </label>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <b-button type="submit" variant="primary" class="w-100">Login</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    name: '',
    login: null,
    pass: '',
    password: null
  }),
  methods: {
    onLogin () {},
    onInput (e, val, validateState) {
      this[val] = e.target.value
      this[validateState] = null
    }
  }
}
</script>
