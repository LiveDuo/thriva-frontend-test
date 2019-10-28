<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No',
            value: 'no'
          },
          coeliac: {
            name: 'Coeliac',
            value: 'coeliac'
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat',
            value: 'low-carb-high-fat'
          },
          paleo: {
            name: 'Paleo',
            value: 'paleo'
          },
          pescatarian: {
            name: 'Pescatarian',
            value: 'pescatarian'
          },
          plantBased: {
            name: 'Plant-based',
            value: 'plant-based'
          },
          other: {
            name: 'Other',
            value: 'other'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      },
      ...mapMutations('survey', ['updateDiet'])
    },
    computed: {
      ...mapState('survey', { dietSelected: 'diet' }),
      ...mapState('survey', ['name'])
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__diet.align-center
        h1 Do you follow a particular diet?
        .spacer.sp__top--sm

        check-button(
          v-for='(diet, key) in diets',
          :key='key',
          :text='diet.name'
          :selected="dietSelected === diet.value"
          :value="diet.value"
          @clicked="updateDiet"
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled='!dietSelected'
              @click='submit'
            ) Next

</template>
