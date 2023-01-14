<script setup>
const locationString = ref(null);
function log(place) {
  locationString.value = place;
  console.log(place);
}
</script>

<template>
  <Header />
  <IPSearch @location="log" />
  <GoogleMap :location="locationString" v-if="locationString" />
</template>

<style scoped>

</style>