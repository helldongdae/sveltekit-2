import { c as create_ssr_component, b as subscribe, e as escape, f as each, d as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth } from "date-fns";
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let calendarDate;
  let $selectedDate, $$unsubscribe_selectedDate;
  const WeekDays = ["월", "화", "수", "목", "금", "토", "일"];
  const selectedDate = writable(new Date());
  $$unsubscribe_selectedDate = subscribe(selectedDate, (value) => $selectedDate = value);
  function isSelectedDate(date) {
    return isSameDay(date, $selectedDate);
  }
  function isCurrentMonth(date) {
    return isSameMonth(date, $selectedDate);
  }
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
  calendarDate = getCalendarDates($selectedDate);
  $$unsubscribe_selectedDate();
  return `<div class="${"w-full max-w-3xl mx-auto rounded-md shadow-md bg-white"}"><div class="${"flex justify-between items-center p-4 bg-gray-100"}"><button class="${"p-2 rounded-full hover:bg-gray-200 focus:outline-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6 text-gray-500"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 19l-7-7 7-7"}"></path></svg></button>
    <div class="${"text-lg font-medium text-gray-800"}">${escape(format($selectedDate, "yyyy년, M월 d일"))}</div>
    <button class="${"p-2 rounded-full hover:bg-gray-200 focus:outline-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6 text-gray-500"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg></button></div>
  <div class="${"grid grid-cols-7 gap-1 p-2"}">${each(WeekDays, (day) => {
    return `<div class="${"text-sm font-medium text-gray-500"}">${escape(day)}</div>`;
  })}
    ${each(calendarDate, (date) => {
    return `<button class="${escape(isCurrentMonth(date) ? "text-gray-800" : "text-gray-500", true) + " " + escape(isSelectedDate(date) ? "bg-green-200" : "bg-gray-100", true) + " rounded-md p-2"}">${escape(format(date, "d"))}
      </button>`;
  })}</div></div>`;
});
const ReservationSlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { slot } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  return `<div class="${"h-32 flex p-4 bg-gray-100 flex-col"}"><div class="${"h-5"}">${escape(title)}</div>
    <div class="${"h-32 grid grid-cols-4 w-full text-xs text-gray-500 mt-1 gap-2"}">${each(slot, (data) => {
    return `<button class="${"inline-block bg-blue-100 text-blue-800 rounded-md px-2 py-1 mr-1"}"><div class="${"w-full text-center"}">${escape(data)}</div>
            </button>`;
  })}</div></div>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { width = "1rem" } = $$props;
  let { height = "1rem" } = $$props;
  let { focusable = false } = $$props;
  let icons = [
    {
      box: 24,
      name: "calendar",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>
`
    },
    {
      box: 24,
      name: "clock",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
    },
    {
      box: 24,
      name: "user",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
`
    }
  ];
  let displayIcon = icons.find((e) => e.name === name);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  return `<svg${add_attribute("class", $$props.class, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 " + escape(displayIcon?.box, true) + " " + escape(displayIcon?.box, true)}"><!-- HTML_TAG_START -->${displayIcon?.svg}<!-- HTML_TAG_END --></svg>`;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let { icon = "" } = $$props;
  let { title = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  open = false;
  return `<div class="${"flex flex-col"}"><button class="${"flex z-20 items-center justify-between py-4 px-6 bg-gray-100 font-black"}"><h2 class="${"flex flex-row justify-center items-center gap-3 text-sm font-bold"}">${validate_component(Icon, "Icon").$$render($$result, { name: icon }, {}, {})}
      ${escape(title)}</h2>
    <button class="${"w-6 h-6 flex items-center justify-center text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 rounded-full border-2 border-gray-300 p-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("class", `h-auto w-auto text-gray-500 ${open ? "-rotate-90" : "rotate-90"}`, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg></button></button>

  <div${add_attribute("class", `drawer z-10 bg-white shadow-lg transform transition duration-300 ease-in-out ${open ? "" : "hidden"}`, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const slot = ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00"];
  return `${validate_component(Drawer, "Drawer").$$render($$result, { icon: "calendar", title: "예약 날짜" }, {}, {
    default: () => {
      return `${validate_component(Calendar, "Calendar").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(Drawer, "Drawer").$$render($$result, { icon: "clock", title: "예약 시간" }, {}, {
    default: () => {
      return `<div>${validate_component(ReservationSlot, "ReservationSlot").$$render($$result, { title: "오전", slot }, {}, {})}
    ${validate_component(ReservationSlot, "ReservationSlot").$$render($$result, { title: "오후", slot }, {}, {})}</div>`;
    }
  })}

${validate_component(Drawer, "Drawer").$$render($$result, { icon: "user", title: "고객 정보" }, {}, {
    default: () => {
      return `<div><div class="${"grid grid-cols-6 justify-between items-center gap-3"}"><label for="${"name"}" class="${"text-sm font-bold col-span-1 text-center"}">이름</label>
      <input type="${"text"}" id="${"name"}" class="${"w-full border-2 border-gray-300 rounded-md p-2 col-span-5"}"></div>

    <div class="${"grid grid-cols-6 justify-between items-center gap-3"}"><label for="${"phone"}" class="${"text-sm font-bold col-span-1 text-center"}">전화번호</label>
      <input type="${"text"}" id="${"phone"}" class="${"w-full border-2 border-gray-300 rounded-md p-2 col-span-5"}"></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
