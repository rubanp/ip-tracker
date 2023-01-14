<script setup lang="ts">
const input = ref(null);
const local = "http://localhost:9999/"
const live = "https://ip-address-13e06d.netlify.app/"
const emit = defineEmits(['location'])

async function find(e) {
    const formData = new FormData(e.target);
    const data = [...formData.entries()];
    const ip = data[0][1];
    const ipData = await fetch(`${local}.netlify/functions/getip?ip=${ip}`)
    let receivedData = await ipData.json()
    receivedData = receivedData.message;
    console.log(receivedData);
    input.value.value = receivedData.ip;
    emitLocation(receivedData.location);
}

function emitLocation(location) {
    const locationString = location.replace(/ /g, "+").replace(/,/, "")
    emit('location', locationString);
}

async function getCurrentIP() {
    const ip = await fetch(`${local}.netlify/functions/getcurrentip`)
    let data = await ip.json()
    data = data.message
    console.log(data);
    input.value.value = data.ip;
    emitLocation(data.location);
}

onMounted(() => {
    getCurrentIP();
})
</script>

<template>
    <div id="ip-search-container">
        <form @submit.prevent="find">
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