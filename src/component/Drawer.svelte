<script>
  import Icon from "./Icon.svelte";
  /**
   * @type {any}
   */
  export let icon = "";
  export let title = "";
  $: open = false;
  function toggleDrawer() {
    open = !open;
  }
</script>

<div class="flex flex-col">
  <button
    class="flex z-20 items-center justify-between py-4 px-6 bg-gray-100 font-black"
    on:click="{toggleDrawer}"
  >
    <h2
      class="flex flex-row justify-center items-center gap-3 text-sm font-bold"
    >
      <Icon name="{icon}" />
      {title}
    </h2>
    <button
      class="w-6 h-6 flex items-center justify-center text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 rounded-full border-2 border-gray-300 p-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="{`h-auto w-auto text-gray-500 ${
          open ? '-rotate-90' : 'rotate-90'
        }`}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </button>

  <div
    class="{`drawer z-10 bg-white shadow-lg transform transition duration-300 ease-in-out ${
      open ? '' : 'hidden'
    }`}"
  >
    <slot />
  </div>
</div>
