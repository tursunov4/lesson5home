<template>
    <ul >
     <router-link class="link" to="/">Users</router-link> 
     <router-link class="link" to="/posts">Posts</router-link>
     <router-link class="link" to="/todo">Posts</router-link>
   
    </ul>
 </template>
 
 <script setup>
   
 </script>
 
 <style  scoped>
   ul{
     padding-top: 30px;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     gap: 30px;
   }
   .link{    
     font-size: 25px;
     color: #000;
     background-color: #fff;
     width: 80%;
     text-align: center;
     padding: 5px;
     border-radius: 5px;
     text-decoration: none;
   }
 </style>