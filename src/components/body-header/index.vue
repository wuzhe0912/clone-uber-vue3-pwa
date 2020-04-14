<template lang="pug">
  header.header__wrap
    b-navbar(toggleable="lg" type="dark")
      b-navbar-brand(href="#") 天橋下的說書人
      b-navbar-toggle(target="nav-collapse")
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-navbar-nav
            b-nav-item(href="#") Home
            b-nav-item(href="#") About
          b-nav-form
            b-form-input(size="sm" class="mr-sm-2" placeholder="Search")
            b-button(size="sm" class="my-2 my-sm-0" type="submit") Search
          //- b-nav-item-dropdown(text="Lang" right)
          //-   b-dropdown-item(href="#") TW
          //-   b-dropdown-item(href="#") EN
          //- b-nav-item-dropdown(right)
          //-   template(v-slot:button-content)
          //-     span User
          //-   b-dropdown-item(href="#") Profile
          //-   b-dropdown-item(href="#") Sign Out
</template>

<script>
export default {
  name: 'body-header',

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
