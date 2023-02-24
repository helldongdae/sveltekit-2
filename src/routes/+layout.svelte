<script>
  import "../app.css";
  import BottomNavigation from "./BottomNavigation.svelte";
  import Header from "./Header.svelte";

  /**
   * @type {any}
   */
  let y;

  $: style = y === 0 ? "scrolled" : "";
</script>

<style>
  main {
    padding: 6vh 0;
  }
</style>

<div>
  <Header style="{style}" />
  <main class="">
    <slot />
  </main>
  <BottomNavigation />
</div>

<svelte:window bind:scrollY="{y}" />
