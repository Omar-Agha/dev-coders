<script lang="ts" setup>
</script>

<template>
        <!-- <div class="glass-card">🚀 Adaptability <p>We embrace change and evolve with technology.</p></div> -->
        <div class="gpt-card">🚀 Adaptability <p>We embrace change and evolve with technology.</p></div>

</template>

<style scoped>
.glass-card {

    padding: 20px;

    height: 200px;
    background: rgba( 255, 255, 255, 0.16 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.31 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

}

.gpt-card {
    /* width: 200px; */
    height: 250px;

    background: rgba(255, 255, 255, 0.05); /* subtle white tint */
    backdrop-filter: blur(15px); /* frosted glass */
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    text-align: center;
    color: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}


.gpt-card:hover {
    box-shadow: 0 0 30px rgba(164, 116, 255, 0.6); /* Glowing purple (adjust if needed) */
    transform: translateY(-10px); /* slight lift */
}
.gpt-card::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent);
    transform: rotate(30deg);
    transition: opacity 0.3s ease;
    opacity: 0;
}

.gpt-card:hover::before {
    opacity: 1;
}

.gpt-card h3 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: bold;
}

.gpt-card p {
    font-size: 14px;
    opacity: 0.7;
    padding: 0 10px;
}
</style>
