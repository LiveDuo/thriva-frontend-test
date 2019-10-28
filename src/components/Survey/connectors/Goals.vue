<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy',
            value: 'energy'
          },
          improveFitness: {
            name: 'Fitness',
            value: 'fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health',
            value: 'long-term-health'
          },
          improveMood: {
            name: 'Mood',
            value: 'mood'
          },
          improveSleep: {
            name: 'Sleep',
            value: 'sleep'
          },
          improveWeight: {
            name: 'Weight',
            value: 'weight'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      },
      onClick (value) {
        this.$store.commit('survey/addRemoveGoal', value)
      },
      ...mapMutations('survey', ['addRemoveGoal'])
    },
    computed: {
      ...mapState('survey', { goalsAdded: 'goals' }),
      ...mapState('survey', ['name']),
      goalsFull () {
        return this.goalsAdded.length >= 4
      }
    }
  }
</script>

<template lang='pug'>
  .grid-x.grid-x-margin
    .cell.small-12.medium-6.medium-offset-3
      .survey-questions__goals.align-center
        h1 Nice to meet you {{ name }}. What would you like to focus on?
        p.body--large.question-description Choose up to four
        .spacer.sp__top--sm

        check-button(
          v-for='(goal, key) in goals',
          :key='key',
          :text='goal.name'
          :selected="goalsAdded.includes(goal.value)"
          :disabled="!goalsAdded.includes(goal.value) && goalsFull"
          :value="goal.value"
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
              :disabled='goalsAdded.length < 1'
              @click='submit'
            ) Next
</template>
