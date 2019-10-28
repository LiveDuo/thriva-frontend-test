<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Gender',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        genders: {
          male: {
            name: 'Male',
            value: 'male'
          },
          female: {
            name: 'Female',
            value: 'female'
          }
        }
      }
    },
    methods: {
      submit () {
        let dataForTheAPI = { name: this.name, goals: this.goals, diets: this.diets, dob: this.dob }
        alert(`Survey complete! Data for the API: ${JSON.stringify(dataForTheAPI)}`)
      },
      back () {
        this.$router.push('/dob')
      },
      ...mapMutations('survey', ['updateGender'])
    },
    computed: {
      ...mapState('survey', { genderSelected: 'gender' }),
      ...mapState('survey', ['name', 'gender', 'goals', 'diets', 'dob'])
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__gender.align-center
        h1 Are you…
        .spacer.sp__top--sm
        p.body--large.question-description We need your biological sex to process your tests
        .spacer.sp__top--sm

        check-button(
          v-for='(gender, key) in genders',
          :key='key',
          :text='gender.name'
          :selected="genderSelected === gender.value"
          :value="gender.value"
          @clicked="updateGender"
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled='!gender'
              @click='submit'
            ) Next

</template>
