export default {
  updateName (state, value) {
    state.name = value
  },
  updateDob (state, value) {
    state.dob = value
  },
  addRemoveGoal (state, value) {
    if (state.goals.includes(value)) {
      let index = state.goals.indexOf(value)
      state.goals.splice(index, 1)
    } else {
      state.goals.push(value)
    }
  },
  addRemoveDiet (state, value) {
    if (state.diets.includes(value)) {
      let index = state.diets.indexOf(value)
      state.diets.splice(index, 1)
    } else {
      state.diets.push(value)
    }
  },
  addRemoveGender (state, value) {
    if (state.gender === value) {
      state.gender = null
    } else {
      state.gender = value
    }
  }
}
