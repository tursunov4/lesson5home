<template>
    <div>
      
      <div class="row mt-5">
        <h1 class="text-center">Users</h1>
        <div class="row">
          <div class="col-md-5 mx-auto">
                <select class="form-control m-5" @change="(e)=>handleChange(e)">
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                </select>
          </div>
        </div>
        <div class="col-md-8 mx-auto">
            <table class="table  table-striped">
                <thead>
                    <tr>
                        <td>T/R</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item , index) in store.state.users " :key="index">
                         <td>{{ index +1 }}</td>
                         <td>{{ item.name }}</td>
                         <td>{{ item.username }}</td>
                         <td>{{ item.email }}</td>
                         <td>{{ item.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  
    </div>
</template>
<script  setup>
     import store from '@/store';
  // import { ref} from 'vue';
  // import axios from 'axios'
  // const users = ref([])
  // const count = ref(2)
  const handleChange=(e)=>{
    store.state.userLimit=e.target.value
    getUsers()
  }

  const getUsers =() =>{
    store.dispatch('getUsers')
  }
  getUsers()
</script>

<style  scoped>

</style>