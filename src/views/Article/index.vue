<template lang="pug">
  article(v-if="articleData.length > 0")
    h2 {{ formatterId.title }}
    i {{ formatterId.date }}
    p(v-html="formatterId.content")
</template>

<script>
export default {
  data () {
    return {
      artId: '',
      articleData: []
    }
  },

  computed: {
    formatterId () {
      return this.articleData.find(node => node.id === this.artId)
    }
  },

  mounted () {
    this.artId = this.$route.params.id
    let url = `${process.env.VUE_APP_ARTICLE_API}`
    fetch(url).then((res) => {
      return res.json()
    }).then((result) => {
      this.articleData = result.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
