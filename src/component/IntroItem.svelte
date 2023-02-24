<script>
  export let title = "";
  export let description = "";
  export let image = "";
</script>

<div class="w-full md:w-1/2 lg:w-1/3 px-6 mb-8">
  <div
    class="w-full bg-white shadow overflow-hidden sm:rounded-md border border-gray900"
  >
    <div class="bg-gray-50  border border-gray900">
      <img
        class="h-64 w-full object-fill"
        src="{image}"
        alt="Featured Property"
      />
    </div>
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900 text-center">
        {title}
      </h3>
      <div class="mt-3 text-gray-600 text-center">
        <p>{description}</p>
      </div>
    </div>
  </div>
</div>
