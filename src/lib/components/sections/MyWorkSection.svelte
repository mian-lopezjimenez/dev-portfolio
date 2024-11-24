<script lang="ts">
  import { SectionHeadline } from "$components";

  interface Props {
    projects: ProcessedProject[];
  }

  let { projects }: Props = $props();
  const mainProject: ProcessedProject = projects[0];
  const otherProjects: ProcessedProject[] = projects.slice(1);
</script>

{#snippet projectItem({
  project,
  containerClass,
}: {
  project: ProcessedProject;
  containerClass: string;
})}
  {@const { name, company, projectImageUrl, slug } = project}
  <article class={containerClass}>
    <a href={`/work/${slug}`}>
      <img src={projectImageUrl} alt={name} />
    </a>

    <div class="project-info mt-s">
      <div class="title-and-company">
        <h3 class="semi-bold">{name}</h3>
        <p class="company dark-grey">{company}</p>
      </div>

      <a href={`/work/${slug}`} class="btn-to-article">&#8594;</a>
    </div>
  </article>
{/snippet}

<section class="mt-l">
  <SectionHeadline sectionName="my-work">My Work</SectionHeadline>

  <div class="default-margin projects-container mt-m">
    {@render projectItem({
      project: mainProject,
      containerClass: "main-project mb-m",
    })}

    <div class="more-projects-container">
      {#each otherProjects as project (project.name)}
        {@render projectItem({ project, containerClass: "project" })}
      {/each}
    </div>
  </div>
</section>

<style>
  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
  }

  .more-projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .more-projects-container img {
    height: 350px;
  }

  .main-project img {
    max-height: 450px;
  }

  .project {
    width: 48%;
  }

  .project-info {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .btn-to-article {
    border-radius: 40px;
    border: 1px solid black;
    display: block;
    font-size: 40px;
    padding: 0px 24px;
  }

  .company {
    font-size: 18px;
    margin-bottom: 0;
  }
</style>
