
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

//counter 唯一标识
export const useCounterStore = defineStore('counter', () => {
    //在这里可以定义一些全局变量
    //定义数据 ref（包裹响应式数据）
    const count = ref(0)

    //定义修改数据的方法（action 同步+异步）
    const add = () => { count.value++; }

    const list = ref([])
    const getList = async () => {
        const res = await axios.get("https://geek.itheima.net/v1_0/channels")
        list.value = res.data.data.channels
    }

    //以对象的形式将数据和方法返回，供组件使用
    return {
        count,
        add,
        list,
        getList,
    }

})