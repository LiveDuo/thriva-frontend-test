export default {
  updateName (state, value) {
    state.name = value
  },
  updateDob (state, value) {
    state.dob = value
  },
  addRemoveGoal (state, value) {
    if (state.goals.includes(value)) {
      const index = state.goals.indexOf(value)
      state.goals.splice(index, 1)
    } else {
      state.goals.push(value)
    }
  },
  updateDiet (state, value) {
    state.diet = value
  },
  updateGender (state, value) {
    state.gender = value
  }
}
