<template lang="pug">
  header.header__wrap
    b-navbar(toggleable="lg" type="dark")
      b-navbar-brand
        router-link(:to="{ name: 'Home' }") Tiger Coding Blog
      b-navbar-toggle(target="nav-collapse")
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(
            v-for="node in navList"
            :key="node.route"
            @click="changeRouter(node.route)"
          ) {{ node.name }}
          b-nav-form
            b-form-input(size="sm" class="mr-sm-2" placeholder="Search")
            b-button(size="sm" class="my-2 my-sm-0" type="submit") Search
          //- b-nav-item-dropdown(text="Lang" right)
          //-   b-dropdown-item(href="#") TW
          //-   b-dropdown-item(href="#") EN
</template>

<script>
export default {
  name: 'body-header',

  data () {
    return {
      navList: [
        { name: '首頁', route: 'Home' },
        { name: '關於', route: 'About' },
        { name: '登入', route: 'Login' }
      ]
    }
  },

  methods: {
    changeRouter (val) {
      this.$router.push({ name: val })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
