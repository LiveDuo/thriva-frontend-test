<script>
  import TextInput from '@/components/Shared/TextInput'
  import ThvButton from '@/components/Shared/Button'

  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Name',
    components: {
      TextInput,
      ThvButton
    },
    computed: {
      ...mapState('survey', ['name'])
    },
    methods: {
      ...mapMutations('survey', ['updateName']),
      submit () {
        this.$router.push('/goals')
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__name.align-center
        h1 Hey! We're Thriva. What’s your first name?
        .spacer.sp__top--sm

        text-input.survey-input(
          type='text',
          name='name',
          :value="name"
          @input="updateName"
          @keyup.enter='submit'
        )

        .grid-x.button-container
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled='!name'
              @click='submit'
            ) Next

</template>
