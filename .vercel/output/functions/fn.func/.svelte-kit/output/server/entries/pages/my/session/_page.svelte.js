import { c as create_ssr_component } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center justify-center min-h-screen"}"><div class="${"bg-white shadow-md rounded px-8 py-6 w-full md:max-w-md"}"><h2 class="${"text-2xl text-gray-800 mb-6"}">My Sessions</h2>
      <form><div class="${"flex flex-col items-center mb-8"}"><div class="${"h-20 w-20 rounded-full flex items-center justify-center bg-purple-600 text-white text-2xl font-bold mb-2"}"><span id="${"sessions-left"}">3</span></div>
          <p class="${"text-sm text-gray-700 font-bold"}">Sessions Left</p></div>
        <div class="${"mb-4"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"lesson-name"}">Lesson Name
          </label>
          <input class="${"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" id="${"lesson-name"}" type="${"text"}" value="${"Piano Lessons"}" disabled></div>
        <div class="${"mb-4"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"total-sessions"}">Total Sessions
          </label>
          <input class="${"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" id="${"total-sessions"}" type="${"number"}" value="${"10"}" disabled></div>
        <div class="${"flex items-center justify-center"}"><a class="${"bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}" href="${"#"}">Buy More Sessions
          </a></div></form></div></div>`;
});
export {
  Page as default
};
