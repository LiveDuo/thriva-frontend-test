<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

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
      onClick (value) {
        this.$store.commit('survey/addRemoveDiet', value)
      }
    },
    computed: {
      name () {
        return this.$store.getters['survey/getName']
      },
      dietsAdded () {
        return this.$store.getters['survey/getDiets']
      },
      dietsFull () {
        return this.dietsAdded.length > 0
      }
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
          :selected="dietsAdded.includes(diet.value)"
          :disabled="!dietsAdded.includes(diet.value) && dietsFull"
          :value="diet.value"
          @clicked="onClick"
        )

        .grid-x.button-container
          .cell.auto
            .back-button-container
              .back-button(@click='back') BACK
          .cell.auto.align-right
            thv-button(
              element='button',
              size='large'
              :disabled='dietsAdded.length < 1'
              @click='submit'
            ) Next

</template>
