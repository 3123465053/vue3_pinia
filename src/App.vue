
<template>
 <button @click="counterStore.add">{{ counterStore.count }}</button>
 <ul>
  <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
 </ul>
</template>

<script setup>

import { useCounterStore } from "@/stores/counter"
import {onMounted} from 'vue'
import {storeToRefs} from 'pinia'

  const counterStore=useCounterStore()
  console.log(counterStore);
   
  //直接结构对象赋值响应式效果会丢失 需要用函数storeToRefs 
  //数据这样使用
  const {count} =storeToRefs(counterStore)

  //方法直接结构赋值
  const {add}=counterStore

  //生命周期函数
  onMounted(()=>{
    counterStore.getList()
  })


</script>

<style scoped>
</style>
