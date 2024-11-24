<script lang="ts">
  import { SectionHeadline } from "$components";

  interface Props {
    skills: Skill[];
  }

  let { skills }: Props = $props();
</script>

<section class="mt-l">
  <SectionHeadline sectionName="skills">Skills</SectionHeadline>

  <div class="wrapper default-margin">
    <div class="skills-container mt-m">
      {#each skills as { iconClass, _key } (_key)}
        <i class={iconClass}></i>
      {/each}
    </div>
  </div>
</section>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    width: 40%;
  }

  i {
    font-size: 80px;
    color: black;
  }
</style>
