<script>
  import { writable } from "svelte/store";
  import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
  } from "date-fns";

  const WeekDays = ["월", "화", "수", "목", "금", "토", "일"];

  const selectedDate = writable(new Date());

  $: calendarDate = getCalendarDates($selectedDate);

  /**
   * @param {Date} date
   */
  function setDate(date) {
    selectedDate.set(date);
  }

  function nextMonth() {
    const date = addMonths($selectedDate, 1);
    selectedDate.set(date);
  }

  function prevMonth() {
    const date = subMonths($selectedDate, 1);
    selectedDate.set(date);
  }

  /**
   * @param {Date} date
   */
  function isSelectedDate(date) {
    return isSameDay(date, $selectedDate);
  }

  /**
   * @param {Date} date
   */
  function isCurrentMonth(date) {
    return isSameMonth(date, $selectedDate);
  }

  /**
   * @param {Date} date
   */
  function getCalendarDates(date) {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dates = [];

    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return dates;
  }
</script>

<div class="w-full max-w-3xl mx-auto rounded-md shadow-md bg-white">
  <div class="flex justify-between items-center p-4 bg-gray-100">
    <button
      class="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      on:click="{prevMonth}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <div class="text-lg font-medium text-gray-800">
      {format($selectedDate, "yyyy년, M월 d일")}
    </div>
    <button
      class="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      on:click="{nextMonth}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
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
  </div>
  <div class="grid grid-cols-7 gap-1 p-2">
    {#each WeekDays as day}
      <div class="text-sm font-medium text-gray-500">{day}</div>
    {/each}
    {#each calendarDate as date}
      <button
        class="{isCurrentMonth(date)
          ? 'text-gray-800'
          : 'text-gray-500'} {isSelectedDate(date)
          ? 'bg-green-200'
          : 'bg-gray-100'} rounded-md p-2"
        on:click="{() => setDate(date)}"
      >
        {format(date, "d")}
      </button>
    {/each}
  </div>
</div>
