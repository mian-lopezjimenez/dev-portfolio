<script lang="ts">
  import { goto } from "$app/navigation";

  import { Button } from "$components";

  const links = [
    {
      href: "#about-me",
      link: "About me",
    },
    {
      href: "#my-work",
      link: "My work",
    },
  ];

  function onclick() {
    goto("/#contact-form");
  }
</script>

<nav class="navbar default-margin">
  <a class="logo" href="/">ML</a>

  <div class="navbar-links">
    {#each links as { href, link } (href)}
      <a class="nav-link" {href}>{link}</a>
    {/each}

    <Button className="nav-bar" {onclick}>Contact</Button>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .logo {
    font-size: 35px;
    font-weight: bold;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>
