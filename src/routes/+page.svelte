<script lang="ts">
  import { HeroSection, AboutMeSection, MyWorkSection } from "$components";

  let { data } = $props();
  let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
