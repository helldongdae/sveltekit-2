<script>
    /**
	 * @type {string}
	 */
     export let title
      /**
	 * @type {string[]}
	 */
    export let slot;
</script>

<div class="h-32 flex p-4 bg-gray-100 flex-col">
    <div class="h-5">{title}</div>
    <div class="h-32 grid grid-cols-4 w-full text-xs text-gray-500 mt-1 gap-2">
        {#each slot as data}
            <button class="inline-block bg-blue-100 text-blue-800 rounded-md px-2 py-1 mr-1">
                <div class="w-full text-center">{data}</div>
            </button>
        {/each}
    </div>
  </div>