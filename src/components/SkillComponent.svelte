<script lang="ts">
    import { viewStack } from '../stores/stores';
    import StackIcon from "../icons/StackIcon.svelte";

    export let stackName: string = "";
    export let stackIconName: string = "";
    export let stackColor: string = "red";
    export let fillColor: string = "#434242";
    export let styleTheme: string = "normal"; // normal : project
    export let isSelected: boolean = false;
    fillColor = styleTheme === "normal" ? stackColor : "#fff";
    export const enterStack = () => {
        fillColor = stackColor;
        viewStack.update(n => stackName);
    }

    export const leaveStack = () => {
        if( styleTheme === "project" ){
            fillColor = "#fff";
        }
    }

    viewStack.subscribe((value:string)=>{

    })
</script>
<button class="techStack" class:isProject={styleTheme === "project"} on:mouseover={enterStack} on:focus={()=>{}} on:mouseleave={leaveStack}>
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
        background-color: #fff;
        border-radius: 4px;
        padding: 6px 14px;
        color: #000;
        border: 0;
    }
    .isProject {
        background-color: transparent;
        color: #fff;
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