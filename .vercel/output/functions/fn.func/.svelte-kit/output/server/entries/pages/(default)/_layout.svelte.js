import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
/* empty css                   */import "animejs";
import { c as clientWidth, a as clientHeight } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_clientWidth;
  let $$unsubscribe_clientHeight;
  $$unsubscribe_clientWidth = subscribe(clientWidth, (value) => value);
  $$unsubscribe_clientHeight = subscribe(clientHeight, (value) => value);
  $$unsubscribe_clientWidth();
  $$unsubscribe_clientHeight();
  return `${``}`;
});
export {
  Layout as default
};
