<script lang="ts">
  import { goto } from "$app/navigation";

  import { Button } from "$components";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello I'm Miguel Ángel</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a Svelte developer crafting intuitive and performat</h1>
  <h1 class="dark-grey">web experiences</h1>
  <Button className="mt-m" {onclick}>Let's talk!</Button>
</section>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>
