<template>
    <div class="container">
        
        <h1 class="text-center mb-5">Posts</h1>
        <div class="row">
            <div class="col-md-4 mx-auto m-4 ">
                <select class="form-control" @change="(e)=>handleChange(e)">
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                </select>

            </div>
        </div>
       <ul class="list">
        <li v-for="(item , index) in store.state.posts" :key="index">
          <span class="text-center d-block mb-3 ">{{ index +1 }}</span>
          <p>{{ item.title }}</p>
          <strong>{{ item.body }}</strong>
        </li>
       </ul>
       <div class="row">
        <div class="col-md-4 m-5 mx-auto">
            <button class="btn m-2 btn-danger" @click="prevClick">Prev</button>
            <span>{{ store.state.postsPagination }}</span>
            <button class="btn m-2 btn-success" @click="nextClick">Next</button>
        </div>
       </div>
    </div>
</template>

<script setup>
 import store from '@/store';
const getPosts = ()=>{
   store.dispatch('getPosts')
}
const handleChange=(e)=>{
    store.state.postsLimit = e.target.value
    getPosts()
}
getPosts()
const nextClick=()=>{
  store.state.postsPagination++
  getPosts()
}
const prevClick=()=>{
    if(  store.state.postsPagination!==1){
      store.state.postsPagination--
        getPosts()
    }
}
</script>

<style  scoped>
  .list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    flex-wrap: wrap;
    list-style: none;
  }
  .list > li{
    border: 1px solid;
    border-radius: 8px;
    background-color: azure;
    padding: 20px;
    width: 400px;
  }
  span{
    font: 400;
    font-size: large;
    color: blue;
  }
</style>