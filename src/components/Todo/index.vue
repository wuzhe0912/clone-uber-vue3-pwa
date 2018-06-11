<template lang="pug">
  .container
    .nav
      .title
        .title-text.title__tasks My tasks
        .title-text.title__progress In Progress
        .title-text.title__completed Completed
    .task
      .input_add
        input(class="task__add" v-model="inputValue" type="text" placeholder=" + Add Task")
        button(class="task__btn" @click="handleBtnClick") Add
      .task__list
        .task__list__li
          .list__text
            .text__todo
              .todo_text
                input(type="checkbox")
                span Type Something Here…(靜態範例)
              .todo_icon
                <font-awesome-icon :icon="['fas','calendar-alt']"/>
                <font-awesome-icon :icon="['fas','file']"/>
                <font-awesome-icon :icon="['fas','comment']"/>
            .text__icon
              <font-awesome-icon :icon="['fas','star']"/>
              <font-awesome-icon :icon="['fas','pencil-alt']"/>
          .list__text(v-for="item in list")
            .text__todo
              .todo_text
                input(type="checkbox")
                span {{item}}
              .todo_icon
                <font-awesome-icon :icon="['fas','calendar-alt']"/>
                <font-awesome-icon :icon="['fas','file']"/>
                <font-awesome-icon :icon="['fas','comment']"/>
            .text__icon
              <font-awesome-icon :icon="['fas','star']"/>
              <font-awesome-icon :icon="['fas','pencil-alt']"/>
    .footer 4 task left
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      list: [],
      inputValue: ''
    }
  },
  methods: {
    handleBtnClick: function () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./style";
</style>
