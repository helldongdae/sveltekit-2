import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full max-w-3xl mx-auto"}"><div class="${"flex justify-between items-center mb-4"}"><h2 class="${"text-2xl font-medium text-gray-800"}">Reservation History</h2>
    <a href="${"/reservation/new"}" class="${"text-blue-500 hover:text-blue-700"}">New Reservation</a></div>
  <div class="${"bg-white shadow-md rounded-md overflow-hidden"}"><table class="${"w-full"}"><thead class="${"bg-gray-100"}"><tr><th class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-left font-medium text-gray-500"}">Date</th>
          <th class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-left font-medium text-gray-500"}">Service</th>
          <th class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-left font-medium text-gray-500"}">Provider</th>
          <th class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-left font-medium text-gray-500"}">Status</th>
          <th class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-left font-medium text-gray-500"}"></th></tr></thead>
      <tbody><tr><td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-800"}">Feb 3, 2023</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-800"}">Haircut</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-800"}">John Doe</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-green-500 font-medium"}">Completed</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-right"}"><a href="${"#"}" class="${"text-blue-500 hover:text-blue-700"}">View</a></td></tr>
        <tr><td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-800"}">Feb 5, 2023</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-800"}">Manicure</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-800"}">Jane Smith</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-yellow-500 font-medium"}">Pending</td>
          <td class="${"py-3 px-2 sm:px-4 text-sm sm:text-base text-right"}"><a href="${"#"}" class="${"text-blue-500 hover:text-blue-700"}">View</a></td></tr></tbody></table></div></div>`;
});
export {
  Page as default
};
