<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    let changing = false;
    let gradientArray = [
        `#FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%`,
        `#21D4FD 0%, #B721FF 100%`,
        `#4158D0 0%, #C850C0 46%, #FFCC70 100%`,
        `#00DBDE 0%, #FC00FF 100%`,
    ];


    function generateGradient() {
        const index = Math.floor(Math.random() * gradientArray.length);
        return gradientArray[index];
    }

    function generateDeg() {
        return Math.floor(Math.random() * 360);
    }

    let currentGradient:string = generateGradient();
    let nextGradient:string = generateGradient();
    let currentDeg = generateDeg();
    let nextDeg = generateDeg();

    function changeGradient() {
        nextGradient = generateGradient();
        nextDeg = generateDeg();
        changing = true;
        setTimeout(() => {
            currentGradient = nextGradient;
            currentDeg = nextDeg;
            changing = false;
        }, 2000);
    }

    let interval :NodeJS.Timeout;
    onMount(() => {
        interval = setInterval(changeGradient, 4000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<style>
    .gradient, .gradient-next {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        transition: opacity 2s ease-in-out;
    }
    .gradient {
        z-index: 1;
    }
    .gradient-next {
        opacity: 0;
        z-index: 0;
    }
    .changing .gradient-next {
        opacity: 1;
        z-index: 2;
    }
</style>

<div transition:fade="{{duration:2000}}" class:changing={changing}>
    <div class="gradient" style="background: linear-gradient({currentDeg}deg ,{currentGradient});"></div>
    <div class="gradient-next" style="background: linear-gradient({nextDeg}deg ,{nextGradient});"></div>
</div>