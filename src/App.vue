<template lang="pug">
  #app
    bodyHeader
    router-view
</template>

<script>
import bodyHeader from '@/components/body-header'

export default {
  components: {
    bodyHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
