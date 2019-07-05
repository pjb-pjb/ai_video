import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        path:"/home2/index",
        ROOT:"http://172.16.3.163:8085/"
    }
})

export default store;