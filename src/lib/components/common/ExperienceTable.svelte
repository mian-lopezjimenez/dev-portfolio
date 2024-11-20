<script lang="ts">
  import { workExperiences } from "$data";
</script>

<section class="default-margin work-experience mt-m">
  <ul class="work-experience-list">
    {#each workExperiences as { jobTitle, company, startDate, endDate } (`${jobTitle}-${company}`)}
      <li class="work-item">
        <article>
          <h3 class="semi-bold mb-xs">{jobTitle}</h3>
          <div class="company-and-date">
            <p>{company}</p>
            <p class="dark-grey">
              {startDate}

              {#if endDate}
                / {endDate}
              {:else}
                / present
              {/if}
            </p>
          </div>
        </article>
      </li>
    {/each}
  </ul>
  <h2 class="headline">Past work <br /> Experience</h2>
</section>

<style>
  .work-experience {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .work-experience-list {
    width: 50%;
  }

  .headline {
    text-align: right;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
