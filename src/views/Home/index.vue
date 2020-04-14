<template lang="pug">
  main.home__wrap
    article.article__wrap
      .article__list(v-for="node in articleData")
        .title
          h3 {{ node.title }}
          i {{ node.date }}
        .summary {{ node.content | summary }}
    aside aside
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      articleData: ''
    }
  },

  created () {
    this.getArticle()
  },

  methods: {
    getArticle () {
      let url = `${process.env.VUE_APP_ARTICLE_API}`
      // fetch api 不僅是原生語法，同時預設採用 promise 包裹
      fetch(url).then((res) => {
        // 回傳的檔案若為 JSON 格式，需要解析處理
        return res.json()
      }).then((result) => {
        console.log(result)
        this.articleData = result.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },

  filters: {
    summary: (val) => {
      return val.substring(0, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./style";
</style>
