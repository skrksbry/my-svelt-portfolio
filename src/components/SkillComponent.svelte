<script lang="ts">
    import { viewStack } from '../stores/stores';
    import StackIcon from "../icons/StackIcon.svelte";
    import {onMount} from "svelte";

    export let stackName: string = "";
    export let stackIconName: string = "";
    export let stackColor: string = "red";
    export let fillColor: string = "#434242";
    export let isSelected: boolean = false;
    fillColor = stackColor;
    export const enterStack = () => {
        fillColor = stackColor;
        viewStack.update(n => stackName);
    }

    export const leaveStack = () => {
        // fillColor = "rgb(226, 222, 222)";
        // isSelected = false;
        // viewStack.update(n => "");
    }

    viewStack.subscribe((value:string)=>{
        // if(value !== stackName){
        //     fillColor = "#434242";
        //     isSelected = false;
        // }else{
        //     isSelected = true;
        // }
    })
</script>
<button class="techStack" on:mouseover={enterStack} on:focus={()=>{}} on:mouseleave={leaveStack}>
    <StackIcon IconName={stackIconName} className="stackIcon" fill={fillColor}/>
    <span>
        {stackName}
    </span>
    <span class:selectedStack={isSelected} class="notSelectedStack">

    </span>
</button>
<style>
    .techStack {
        display: flex;
        align-items: center;
        font-family: 'Pretendard', serif;
        font-weight: 500;
        font-size: 0.8em;
        gap: 6px;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 6px 14px;
        color: #000000;
        border: 0;
    }
    .techStack:hover {
        background-color: #dddddd;
    }
    .techStack span {
        font-size: 1.2em;
        pointer-events: none;
        user-select: none;
    }
    .notSelectedStack {
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        opacity: 0;
        transition: all 1s;
    }
    .selectedStack {
        opacity: 1;
    }
</style>