import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center justify-center min-h-screen"}"><div class="${"bg-white shadow-md rounded px-8 py-6 w-full md:max-w-md"}"><h2 class="${"text-2xl text-gray-800 mb-6"}">Create an account</h2>
        <form><div class="${"mb-4"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"name"}">Name
            </label>
            <input class="${"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" id="${"name"}" type="${"text"}" placeholder="${"Enter your name"}"></div>
        <div class="${"mb-4"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"email"}">Email
            </label>
            <input class="${"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" id="${"email"}" type="${"email"}" placeholder="${"Enter your email"}"></div>
        <div class="${"mb-6"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"password"}">Password
            </label>
            <input class="${"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" id="${"password"}" type="${"password"}" placeholder="${"Enter your password"}"></div>
        <div class="${"flex items-center justify-between"}"><button class="${"bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}" type="${"submit"}">Sign Up
            </button>
            <a class="${"inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-700"}" href="${"#"}">Already have an account?
            </a></div></form></div></div>`;
});
export {
  Page as default
};
