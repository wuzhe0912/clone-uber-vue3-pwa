<template lang="pug">
  .notFound__wrap
    .main this is not found page
    b-button(@click="backHome()") Go Home
</template>

<script>
export default {
  name: 'NotFound404',
  data () {
    return {}
  },

  methods: {
    backHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
