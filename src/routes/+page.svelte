<script lang="ts">
  import {
    AboutMeSection,
    ContactSection,
    HeroSection,
    MyWorkSection,
    SkillsSection,
  } from "$components";

  let { data } = $props();
  let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
