<script setup lang="ts">
const input = ref(null);
function log(e) {
    const formData = new FormData(e.target);
    const data = [...formData.entries()];
    const ip = data[0][1];
    console.log(ip);
}
async function getIP() {
    const ip = await fetch(`http://localhost:9999/.netlify/functions/getip`)
    let data = await ip.json()
    data = data.message
    input.value.value = data.ip;
}
onMounted(() => {
    getIP();
})
</script>

<template>
    <div id="ip-search-container">
        <form @submit.prevent="log">
            <input type="text" name="ipAddress" id="ipAddress" placeholder="Search for any IP address or domain"
                ref="input">
            <button type="submit">
                <IconArrow />
            </button>
        </form>
    </div>
</template>

<style scoped>
form {
    height: 58px;
    border-radius: 15px;
}
</style>