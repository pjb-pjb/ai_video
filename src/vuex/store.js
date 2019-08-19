 import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        path:"/home/main",
        ROOT:"http://192.168.6.10:9091/",
    }
})

export default store;