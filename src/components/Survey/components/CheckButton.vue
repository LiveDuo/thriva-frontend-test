<script>
  export default {
    name: 'CheckButton',
    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick () {
        this.$emit('clicked', this.value)
      }
    }
  }
</script>

<template lang='pug'>
  .check-button-container
    .check-button(
      :class="{ 'check-button--selected': selected, 'check-button--disabled': disabled }",
      tabindex='0'
      @click="onClick"
    ) {{ text }}

</template>

<style lang='stylus'>
  .check-button
    max-width: 478px
    height: 120px
    border-radius: 4px
    border: solid 1px #ced0d9
    background-color: #ffffff
    color: #3d4250
    font-size: 20px
    font-weight: normal
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 20px
    margin-left: auto
    margin-right: auto
    &:hover
      cursor: pointer
      background-color: #ececec
    &--selected
      border: solid 2px #3ecadd
      background-color: #f4fcfd
    &--disabled
      border: solid 1px #e5e7f1
      background-color: #ffffff
      color: #ced0d9
      pointer-events: none
</style>
