<script lang="ts">
    import { fly } from 'svelte/transition';

    export let hrColor = "#666666";
    export let hrBgCustom = "";
    export let hrHeight = 3;
    export let hrWidth = 100;
    export let hrWidthType = "px";
    export let durationTime = 500;

</script>

<div
        class="hrLine"
        style="animation:flyIn {durationTime}ms ease-in-out forwards;background-color: {hrColor};height: {hrHeight}px;width: {hrWidth}{hrWidthType};{hrBgCustom}">
<!--    transition:fly="{{ x: 450, delay: 1200, duration: durationTime+700 }}"-->
</div>

<style>
</style>