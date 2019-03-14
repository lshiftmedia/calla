if (Number.isFinite === undefined) Number.isFinite = function(value) {
  return typeof value === 'number' && isFinite(value);
}

// States
export const state = () =>({

  toggleNav: false

})

// mutations
export const mutations = {

  TOGGLE_NAV(state) {
      state.toggleNav = !state.toggleNav
  }

}

// actions
export const actions = {

  toggleNav({ commit }) {
      commit('TOGGLE_NAV')
  }

}

// Getters
export const getters = {

  toggleNav: state => state.toggleNav,

}