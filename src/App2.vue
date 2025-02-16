<script setup>
import { onMounted, ref } from 'vue';

const name = ref("Ceia")
const status = ref(true)
const planes = ref(['Boeing', 'Airbus', 'Cessna'])
// const planes = ref([
//   { id: 1, airliner: 'Airasia' },
//   { id: 2, airliner: 'Ryanair' },
// ])
const newPlane = ref('')

const addPlane = () => {
  if (newPlane.value !== '') {
    planes.value.push(newPlane.value)
    newPlane.value = ''
  }
}

const deletePlane = (index) => {
  planes.value.splice(index, 1)
}

const toggleStatus = () => {
  // status.value = [true, false, 'Pending'][status.value === true ? 1 : status.value === false ? 2 : 0]
  if (status.value === true) {
    status.value = false
  } else if (!status.value) {
    status.value = 'Pending'
  } else {
    status.value = true
  }
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    planes.value = data.map((plane) => plane.title)
  } catch (error) {
    console.error("Failed to fetch data")
  }
})

</script>

<template>
  <h1>User: {{ name }}</h1>
  <p v-if="status === true">You are now: Online</p>
  <p v-else-if="status === false">You are now: Offline</p>
  <p v-else>You are now: Pending</p>
  <p v-for="(plane, index) in planes" :key="index">
    <span>
      {{ plane }}
      <button @click="deletePlane(index)">X</button>
    </span>
  </p>
  <form @submit.prevent="addPlane">
    <input type="text" name="newPlane" id="newPlane" v-model="newPlane">
    <button type="submit">Submit</button>
  </form>
  <br>
  <button @click="toggleStatus">Change Status</button>
</template>