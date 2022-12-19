<template>
    <div id="header-container">
        <h1>IP Address Tracker</h1>
    </div>
</template>

<style scoped>
#header-container {
    width: 100%;
    height: 280px;
    background-image: url('../assets/images/pattern-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    font-size: 2rem;
    margin: 2rem 0;
    color: white;
}
</style>