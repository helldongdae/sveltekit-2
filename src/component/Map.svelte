<script charset="UTF-8">
  import { onMount } from "svelte";

  onMount(() => {
    console.log(window);
    // @ts-ignore
    new window.daum.roughmap.Lander({
      timestamp: "1677254285990",
      key: "2duu7",
      mapWidth: "100%",
      mapHeight: "360",
    }).render();
  });
</script>

<div
  id="daumRoughmapContainer1677254285990"
  class="root_daum_roughmap root_daum_roughmap_landing"
  style="width:100%"
></div>
