<script>
  export let style = "";
</script>

<style>
  header {
    height: 6vh;
  }

  .scrolled {
    background: #fbc2eb;
  }
</style>

<header class="{`fixed w-full bg-white py-4 px-6 ${style}`} z-20">
  <div class="grid grid-cols-2 items-center">
    <a href="/">
      <h1 class="ml-2 text-sm font-medium text-gray-800 text-start">
        Body Design
      </h1>
    </a>
    <button class="text-black flex justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        ></path>
      </svg>
    </button>
  </div>
</header>
