import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const NASA_KEY = "h672eM0kcf7paLRryzPxQGrTZ27z728wzIFLmU47"

export default new Vuex.Store({
  state: {
    apod: {},
    currentUser: null
  },
  mutations: {
    GET_APOD(state, apod) { state.apod = apod },
    UPDATE_CURRENT_USER(state, user) { state.currentUser = user}
  },
  actions: {
    getApod({commit}){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then(resp => {
        commit('GET_APOD', resp.data)
      })
      .catch(() => {
        commit('GET_APOD', {url: "https://apod.nasa.gov/apod/image/2010/NGC5643_HubbleZamani_960.jpg"})
      })
    },
    updateCurrentUser({commit}, user){
      commit('UPDATE_CURRENT_USER', user)
    }
  },
  modules: {
  }
})
