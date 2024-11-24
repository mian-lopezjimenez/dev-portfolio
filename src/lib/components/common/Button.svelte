<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    children: Snippet;
    className?: string;
  }

  let { children, className, ...rest }: Props = $props();
</script>

<button class={`btn ${className}`} {...rest}>
  {@render children()}
</button>

<style>
  .btn {
    background-color: black;
    border-radius: 10px;
    color: white;
    font-family: "Inter Tight", sans-serif;
    font-size: 24px;
    font-weight: 500;
    padding: 14px 40px;
  }

  .nav-bar {
    padding: 10px 24px;
    font-size: 20px;
  }
</style>
