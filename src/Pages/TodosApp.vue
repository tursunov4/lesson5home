<template>
    <div>
    <h1 class="m-3">Qadam :{{$store.state.qadam }} </h1>
    <div>
        <button  class="btn btn-success m-3" @click="$store.dispatch('oshir')">Qadam oshir</button>
    </div>
    
    <hr>
     <h1 class="m-3">Yurildi :{{ $store.state.yur }}</h1>
     <button @click="$store.dispatch('yur')" class="btn btn-info">Yurish</button>
    </div>
</template>

<script setup>
 
</script>

<style  scoped>

</style>