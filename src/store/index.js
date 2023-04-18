import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    users:[],
    todos:[],
    photos :[],
    posts:[],
    comments :[],
    userLimit: 2,
    postsPagination : 1,
    postsLimit :8,
    qadam : 0,
    yur:0
  },
  getters: {
  },
  mutations: {
    getUsers(state , data){
      state.users = data
    },
    getPosts(state, data){
      state.posts =data
    },
    oshir(state, step){
      state.qadam+=step
    },
    yur(state , step){
     state.yur +=step
    }
  },
  actions:{
    getUsers({commit , state}){
      axios.get( `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${state.userLimit}`).then((res)=>{
        commit('getUsers' , res.data)
      })      
    },
    getPosts({commit , state}){
      axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${state.postsPagination}&_limit=${state.postsLimit}`).then((res)=>{
        commit('getPosts' , res.data)
    })
    },
    oshir({commit}){
      commit('oshir', 1)
    },
    yur({commit, state}){
      commit('yur' ,state.qadam)
    }
  },

  modules: {
  }
})