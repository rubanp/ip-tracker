<script setup lang="ts">
const props = defineProps(['location'])
const key = "AIzaSyAzIBl6qbKNnyfwsw7AglyXzgUmI3BISGg"
const url =
    ref(`https://www.google.com/maps/embed/v1/place?key=${key}&q=${props.location}`);
console.log(props.location);
</script>

<template>
    <div id="google-map-div">
        <iframe :src="url" frameborder="0" loading="lazy" allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style scoped>
iframe {
    width: 600px;
    height: 450px;
    border: 0;
}
</style>