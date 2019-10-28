<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    computed: {
      currentStep () {
        return this.$route.meta.currentStep
      },
      stages () {
        return this.$router.options.routes[0].children
      }
    }
  }
</script>

<template lang='pug'>
  .progress-bar-container
    progress-bar(v-if='currentStep >= 0' :currentStep='currentStep', :totalSteps='stages.length-1')
</template>

<style lang='stylus'>
  .progress-bar-container
    display: flex
    flex-wrap: nowrap
    width: 80px
    align-items: center
</style>
