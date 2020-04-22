<template lang="pug">
  main.main__wrap
    b-form.login__form
      b-form-group#input-group-1(
        label='請輸入帳號:'
        label-for='input-1'
      )
        b-form-input#input-1(
          v-model='formData.account'
          type='text'
          required
          placeholder='Enter account'
        )
      b-form-group#input-group-2(
        label='請輸入密碼:'
        label-for='input-2'
      )
        b-form-input#input-2(
          v-model='formData.password'
          type='password'
          required
          placeholder='Enter password'
        )
      b-button(
        type='submit'
        variant='primary'
        @click.prevent="goToAdmin()"
      ) 登入
</template>

<script>
export default {
  data () {
    return {
      formData: {
        account: '',
        password: ''
      }
    }
  },

  methods: {
    goToAdmin () {
      this.$router.push({ name: 'Admin' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./style";
</style>
