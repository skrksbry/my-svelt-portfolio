<script lang="ts">
    export let className: string = "";
    export let fill: string = "rgba(0,0,0,0.7)";
    export let IconName: string = "";
</script>

<svg role="img" fill={fill} class={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    {#if IconName === "DownArrow"}
        <path xmlns="http://www.w3.org/2000/svg" d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/>
    {:else if IconName === "Email"}
        <rect xmlns="http://www.w3.org/2000/svg" x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/>
    {:else if IconName === "Phone"}
        <rect x="128" y="16" width="256" height="480" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    {:else if IconName === "Link" }
        <path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/>
    {/if}
</svg>