<script>
  import Calendar from "../../../component/Calendar.svelte";
  import ReservationSlot from "../../../component/ReservationSlot.svelte";
  import Drawer from "../../../component/Drawer.svelte";

  const slot = ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00"];
</script>

<Drawer icon="calendar" title="예약 날짜">
  <Calendar />
</Drawer>

<Drawer icon="clock" title="예약 시간">
  <div>
    <ReservationSlot title="오전" slot="{slot}" />
    <ReservationSlot title="오후" slot="{slot}" />
  </div>
</Drawer>

<Drawer icon="user" title="고객 정보">
  <div>
    <div class="grid grid-cols-6 justify-between items-center gap-3">
      <label for="name" class="text-sm font-bold col-span-1 text-center"
        >이름</label
      >
      <input
        type="text"
        id="name"
        class="w-full border-2 border-gray-300 rounded-md p-2 col-span-5"
      />
    </div>

    <div class="grid grid-cols-6 justify-between items-center gap-3">
      <label for="phone" class="text-sm font-bold col-span-1 text-center"
        >전화번호</label
      >
      <input
        type="text"
        id="phone"
        class="w-full border-2 border-gray-300 rounded-md p-2 col-span-5"
      />
    </div>
  </div>
</Drawer>
