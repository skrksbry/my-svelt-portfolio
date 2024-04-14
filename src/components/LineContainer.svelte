<script>
    export let tab = 0;
</script>

<div>
    <div class="flexLineContainer" style="padding-left:{18 * tab}px">
        <slot />
    </div>
</div>


<style>
    div {
        width: 100%;
        gap: 18px;
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>