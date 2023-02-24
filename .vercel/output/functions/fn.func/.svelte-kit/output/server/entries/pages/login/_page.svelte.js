import { c as create_ssr_component } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-186qzzt.svelte-186qzzt{background-color:#f3f3f3;font-family:Arial, sans-serif}.container.svelte-186qzzt.svelte-186qzzt{background-color:#fff;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);margin:50px auto;max-width:400px;padding:30px;text-align:center}img.svelte-186qzzt.svelte-186qzzt{display:block;margin:0 auto 30px}form.svelte-186qzzt.svelte-186qzzt{display:flex;flex-direction:column}label.svelte-186qzzt.svelte-186qzzt{display:none}input.svelte-186qzzt.svelte-186qzzt{background-color:#f3f3f3;border:none;border-radius:5px;margin-bottom:20px;padding:10px}button.svelte-186qzzt.svelte-186qzzt{background-color:#4CAF50;border:none;border-radius:5px;color:#fff;cursor:pointer;margin-top:10px;padding:10px;transition:background-color 0.3s ease}button.svelte-186qzzt.svelte-186qzzt:hover{background-color:#3e8e41}a.svelte-186qzzt.svelte-186qzzt{color:#4CAF50;display:block;margin-top:20px;text-decoration:none}footer.svelte-186qzzt.svelte-186qzzt{font-size:14px;margin-top:50px;text-align:center}footer.svelte-186qzzt a.svelte-186qzzt{color:#666;margin:0 10px;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="${"svelte-186qzzt"}"><div class="${"container svelte-186qzzt"}"><img src="${"company-logo.png"}" alt="${"Company Logo"}" class="${"svelte-186qzzt"}">
      <form class="${"svelte-186qzzt"}"><label for="${"email"}" class="${"svelte-186qzzt"}">Email Address:</label>
        <input type="${"email"}" id="${"email"}" name="${"email"}" required class="${"svelte-186qzzt"}">
        <label for="${"password"}" class="${"svelte-186qzzt"}">Password:</label>
        <input type="${"password"}" id="${"password"}" name="${"password"}" required class="${"svelte-186qzzt"}">
        <button type="${"submit"}" class="${"svelte-186qzzt"}">Log In</button></form>
      <a href="${"#"}" class="${"svelte-186qzzt"}">Forgot Password?</a>
      <a href="${"#"}" class="${"svelte-186qzzt"}">Sign Up</a></div>
    <footer class="${"svelte-186qzzt"}"><a href="${"#"}" class="${"svelte-186qzzt"}">Privacy Policy</a>
      <a href="${"#"}" class="${"svelte-186qzzt"}">Terms and Conditions</a>
      <a href="${"#"}" class="${"svelte-186qzzt"}">About Us</a>
      <a href="${"#"}" class="${"svelte-186qzzt"}">Contact Us</a></footer>
  </body>`;
});
export {
  Page as default
};
