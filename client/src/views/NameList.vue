<template>
   <div>Name will come soon</div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from "axios"
const name = ref([])
onMounted(async () => {
    const data = await axios.get("/api/values/all");
    name.value = data
    console.log(name.value)
})
</script>

<style>

</style>