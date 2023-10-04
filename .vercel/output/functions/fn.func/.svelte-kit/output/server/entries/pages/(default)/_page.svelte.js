import { c as create_ssr_component, e as escape, b as add_attribute, n as null_to_empty, a as subscribe, d as createEventDispatcher, f as set_store_value, v as validate_component } from "../../../chunks/ssr.js";
import "animejs";
import { s as size, r as rows, b as columns, c as clientWidth, a as clientHeight, n as navTarget, d as navigating, t as tweened, e as cubicOut } from "../../../chunks/stores.js";
const NameAnimation_svelte_svelte_type_style_lang = "";
const css = {
  code: ".parent-g.svelte-108qjps{font-size:19.05px;line-height:0;letter-spacing:-2.10873px;word-spacing:0px;white-space:pre;inline-size:291.495;display:inline;stroke-width:0.5px}",
  map: null
};
const style = "stroke-opacity: 1";
const classes = "italic font-light fill-none stroke-secondary-700";
const NameAnimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scaler: scaler2 } = $$props;
  let scale = scaler2 || 1;
  let svgEl;
  if ($$props.scaler === void 0 && $$bindings.scaler && scaler2 !== void 0)
    $$bindings.scaler(scaler2);
  $$result.css.add(css);
  return `<svg width="250.79279mm" height="42.881603mm" viewBox="0 0 250.79279 42.881603" version="1.1" id="svg21" class="mb-32 pointer-events-none" xmlns="http://www.w3.org/2000/svg" style="${"transform: scale(" + escape(scale, true) + ")"}"><defs id="defs18"></defs><g id="layer1" transform="translate(-26.457141,-59.642934)"${add_attribute("this", svgEl, 0)}><g aria-label="Analetta Rae Marie Ehler" transform="translate(-38.301733,-1.9475457)" id="text149" class="parent-g svelte-108qjps"><path d="M 64.972308,104.14445 86.046085,61.722773 h 6.384117 q 0.743775,3.045045 1.456557,6.687163 0.743797,3.642114 1.363601,7.791736 0.650807,4.149625 1.208637,8.717196 0.557843,4.537717 1.022693,9.373959 0.495863,4.836267 0.898743,9.851623 h -4.369704 q -0.3409,-4.65712 -0.743778,-9.135149 -0.40288,-4.507849 -0.898735,-8.717179 -0.464859,-4.209328 -1.022696,-8.030564 -0.526843,-3.821236 -1.115669,-7.105113 -0.557837,-3.313726 -1.177653,-5.970678 H 88.494362 L 69.527964,104.14445 Z m 7.747714,-11.31442 0.774769,-3.701836 h 22.313396 l -0.774764,3.701836 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}" style="${escape(style, true) + " paint-order: 'markers fill stroke';"}" id="path351"></path><path d="m 99.691223,104.14445 1.739427,-9.85986 h 1.03249 l -0.26045,2.790528 -1.24644,7.069332 z m 6.464727,0 1.15342,-6.557736 q 0.20464,-1.162719 -0.20463,-1.739428 -0.40929,-0.586011 -1.4976,-0.586011 -0.91157,0 -1.70222,0.539502 -0.79065,0.5302 -1.40457,1.776636 -0.61392,1.246435 -0.98599,3.376537 l 0.46509,-3.990453 h 0.38137 q 0.37207,-1.367359 1.30225,-2.111499 0.93018,-0.753443 2.31615,-0.753443 1.5999,0 2.24172,0.902271 0.65113,0.90227 0.34417,2.660302 l -1.14412,6.483322 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path353"></path><path d="m 111.81316,104.33979 q -1.32085,0 -2.04638,-0.72554 -0.72554,-0.72553 -0.72554,-2.04638 0,-1.67432 0.67903,-3.032376 0.68832,-1.367359 1.92546,-2.334741 1.23713,-0.967383 2.90214,-1.488282 1.66502,-0.520898 3.61839,-0.520898 h 0.17673 l -1.30225,7.366987 q -0.13022,0.76275 0.13953,1.16272 0.27905,0.39998 0.99529,0.39998 h 0.5581 l -0.18603,1.11621 h -0.5116 q -0.67903,0 -1.12551,-0.15813 -0.44648,-0.15813 -0.68833,-0.48369 -0.24185,-0.33486 -0.28835,-0.85576 -0.0465,-0.5209 0.0651,-1.24644 l 0.61391,0.11162 h -0.95808 l 0.46509,-0.79065 q -0.54881,1.68362 -1.67432,2.6045 -1.12551,0.92087 -2.63239,0.92087 z m 0.28835,-1.16272 q 1.54409,0 2.69751,-1.30225 1.15342,-1.30224 1.572,-3.683491 l 0.5674,-3.199805 0.76275,0.362769 q -1.63711,0.05581 -3.00447,0.539502 -1.35805,0.474389 -2.34404,1.292944 -0.97668,0.809253 -1.51618,1.897558 -0.53021,1.088303 -0.53021,2.371943 0,0.81856 0.4744,1.27435 0.47439,0.44648 1.32084,0.44648 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path355"></path><path d="m 123.17543,104.33049 q -1.48828,0 -2.21382,-0.69763 -0.71623,-0.69764 -0.71623,-2.1208 0,-0.39068 0.0651,-1.0139 0.0744,-0.623213 0.34416,-1.637105 l 1.38597,-5.2927 q 0.32555,-1.237134 -0.093,-1.823144 -0.40928,-0.586011 -1.69292,-0.586011 -0.33487,0 -0.67904,0.04651 -0.34416,0.03721 -0.68832,0.139526 l -0.22324,-1.097607 q 0.46508,-0.130225 0.93947,-0.186035 0.47439,-0.05581 0.94878,-0.05581 1.77663,0 2.48357,0.939478 0.71624,0.939477 0.23255,2.781225 l -1.34876,5.13457 q -0.28835,1.069702 -0.35347,1.683613 -0.0651,0.61392 -0.0651,0.90227 -0.0186,1.72083 1.85105,1.72083 0.50229,0 0.97668,-0.15813 0.4837,-0.16743 1.06041,-0.5116 l 0.43718,1.02319 q -0.61392,0.38138 -1.27434,0.59532 -0.65113,0.21394 -1.37666,0.21394 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path357"></path><path d="m 130.509,103.16777 q 0.76275,0 1.62781,-0.24185 0.87437,-0.24184 1.68362,-0.68833 l 0.42788,1.00459 q -0.88366,0.5116 -1.88826,0.79995 -1.00459,0.28836 -1.93477,0.28836 -1.86964,0 -2.92074,-1.0511 -1.0511,-1.0604 -1.0511,-2.93936 0,-1.934761 0.66043,-3.330025 0.66972,-1.395263 1.89755,-2.148706 1.23713,-0.762744 2.93936,-0.762744 1.43247,0 2.23242,0.68833 0.79995,0.68833 0.79995,1.916162 0,1.823145 -1.96267,2.781226 -1.95337,0.958077 -5.46013,1.023197 l -0.19534,-1.051102 q 3.06027,-0.04651 4.70669,-0.716236 1.65571,-0.679028 1.65571,-1.981274 0,-0.697632 -0.50229,-1.097607 -0.5023,-0.399976 -1.41387,-0.399976 -1.27435,0 -2.20452,0.604614 -0.93017,0.604614 -1.44177,1.739429 -0.50229,1.125513 -0.51159,2.688212 0.009,1.34875 0.76274,2.11149 0.76274,0.76275 2.09289,0.76275 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path359"></path><path d="m 140.30653,104.33049 q -1.48828,0 -2.23243,-0.71624 -0.74414,-0.72553 -0.74414,-2.16731 0,-0.40927 0.0372,-0.78134 0.0372,-0.38138 0.11162,-0.846464 0.0744,-0.465088 0.19534,-1.144116 l 1.29295,-7.376294 h 1.25573 l -1.29294,7.376294 q -0.16743,0.995288 -0.26045,1.53479 -0.0837,0.5395 -0.0837,1.11621 0,0.92087 0.47439,1.38596 0.47439,0.45579 1.42317,0.45579 0.72553,0 1.27434,-0.13023 0.5581,-0.13022 1.31155,-0.45578 l 0.24185,1.0604 q -0.64183,0.28835 -1.35806,0.49299 -0.71624,0.19534 -1.64642,0.19534 z m -4.83692,-8.911085 0.19534,-1.134815 h 8.53902 l -0.19534,1.134815 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path361"></path><path d="m 149.35991,104.33049 q -1.48828,0 -2.23242,-0.71624 -0.74414,-0.72553 -0.74414,-2.16731 0,-0.40927 0.0372,-0.78134 0.0372,-0.38138 0.11162,-0.846464 0.0744,-0.465088 0.19534,-1.144116 l 1.29294,-7.376294 h 1.25574 l -1.29294,7.376294 q -0.16743,0.995288 -0.26045,1.53479 -0.0837,0.5395 -0.0837,1.11621 0,0.92087 0.47439,1.38596 0.47439,0.45579 1.42317,0.45579 0.72554,0 1.27434,-0.13023 0.55811,-0.13022 1.31155,-0.45578 l 0.24185,1.0604 q -0.64183,0.28835 -1.35806,0.49299 -0.71624,0.19534 -1.64641,0.19534 z m -4.83692,-8.911085 0.19534,-1.134815 h 8.53901 l -0.19533,1.134815 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path363"></path><path d="m 155.49253,104.33979 q -1.32084,0 -2.04638,-0.72554 -0.72554,-0.72553 -0.72554,-2.04638 0,-1.67432 0.67903,-3.032376 0.68833,-1.367359 1.92546,-2.334741 1.23714,-0.967383 2.90215,-1.488282 1.66502,-0.520898 3.61839,-0.520898 h 0.17673 l -1.30225,7.366987 q -0.13022,0.76275 0.13953,1.16272 0.27905,0.39998 0.99529,0.39998 h 0.5581 l -0.18603,1.11621 h -0.5116 q -0.67903,0 -1.12551,-0.15813 -0.44649,-0.15813 -0.68833,-0.48369 -0.24185,-0.33486 -0.28836,-0.85576 -0.0465,-0.5209 0.0651,-1.24644 l 0.61391,0.11162 h -0.95808 l 0.46509,-0.79065 q -0.5488,1.68362 -1.67432,2.6045 -1.12551,0.92087 -2.6324,0.92087 z m 0.28836,-1.16272 q 1.54409,0 2.69751,-1.30225 1.15342,-1.30224 1.572,-3.683491 l 0.5674,-3.199805 0.76275,0.362769 q -1.63711,0.05581 -3.00447,0.539502 -1.35806,0.474389 -2.34404,1.292944 -0.97669,0.809253 -1.51619,1.897558 -0.5302,1.088303 -0.5302,2.371943 0,0.81856 0.47439,1.27435 0.47439,0.44648 1.32085,0.44648 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path365"></path><path d="m 169.06123,99.651705 0.18603,-1.153418 h 0.73484 q 3.36724,0 5.09737,-1.00459 1.73942,-1.00459 1.73942,-2.939356 0,-1.302246 -1.01389,-1.981274 -1.01389,-0.679028 -2.97656,-0.679028 -1.66501,0 -2.71611,0.186035 l 0.0558,-1.144116 q 1.10691,-0.186035 2.83703,-0.186035 2.50218,0 3.78582,0.948779 1.29294,0.948779 1.29294,2.790527 0,2.53938 -2.1301,3.850928 -2.1301,1.311548 -6.27869,1.311548 z m -1.21853,4.492745 2.32544,-13.208492 h 1.23713 l -2.32544,13.208492 z m 7.66465,0 -1.95337,-5.739181 h 1.32085 l 2.01848,5.739181 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path367"></path><path d="m 180.22507,104.33979 q -1.32085,0 -2.04638,-0.72554 -0.72554,-0.72553 -0.72554,-2.04638 0,-1.67432 0.67903,-3.032376 0.68833,-1.367359 1.92546,-2.334741 1.23713,-0.967383 2.90215,-1.488282 1.66501,-0.520898 3.61838,-0.520898 h 0.17674 l -1.30225,7.366987 q -0.13022,0.76275 0.13953,1.16272 0.27905,0.39998 0.99528,0.39998 h 0.55811 l -0.18604,1.11621 h -0.51159 q -0.67903,0 -1.12551,-0.15813 -0.44649,-0.15813 -0.68833,-0.48369 -0.24185,-0.33486 -0.28836,-0.85576 -0.0465,-0.5209 0.0651,-1.24644 l 0.61392,0.11162 h -0.95808 l 0.46509,-0.79065 q -0.54881,1.68362 -1.67432,2.6045 -1.12551,0.92087 -2.6324,0.92087 z m 0.28836,-1.16272 q 1.54409,0 2.69751,-1.30225 1.15341,-1.30224 1.57199,-3.683491 l 0.56741,-3.199805 0.76274,0.362769 q -1.6371,0.05581 -3.00446,0.539502 -1.35806,0.474389 -2.34405,1.292944 -0.97668,0.809253 -1.51618,1.897558 -0.5302,1.088303 -0.5302,2.371943 0,0.81856 0.47439,1.27435 0.47439,0.44648 1.32085,0.44648 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path369"></path><path d="m 191.45507,103.16777 q 0.76274,0 1.6278,-0.24185 0.87437,-0.24184 1.68362,-0.68833 l 0.42788,1.00459 q -0.88366,0.5116 -1.88825,0.79995 -1.00459,0.28836 -1.93477,0.28836 -1.86965,0 -2.92075,-1.0511 -1.0511,-1.0604 -1.0511,-2.93936 0,-1.934761 0.66042,-3.330025 0.66973,-1.395263 1.89756,-2.148706 1.23714,-0.762744 2.93936,-0.762744 1.43247,0 2.23242,0.68833 0.79995,0.68833 0.79995,1.916162 0,1.823145 -1.96267,2.781226 -1.95337,0.958077 -5.46013,1.023197 l -0.19534,-1.051102 q 3.06028,-0.04651 4.70669,-0.716236 1.65571,-0.679028 1.65571,-1.981274 0,-0.697632 -0.50229,-1.097607 -0.5023,-0.399976 -1.41387,-0.399976 -1.27434,0 -2.20451,0.604614 -0.93018,0.604614 -1.44178,1.739429 -0.50229,1.125513 -0.51159,2.688212 0.009,1.34875 0.76274,2.11149 0.76274,0.76275 2.0929,0.76275 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path371"></path><path d="m 207.37599,97.93185 0.37207,-1.265039 h 0.0465 l 3.23701,-6.055444 h 1.09761 l -0.23254,1.330151 h -0.43719 l -3.25561,5.990332 z m -5.10666,5.88801 2.30683,-13.208493 h 1.24644 l -2.32544,13.208493 z m 4.66018,-5.88801 -1.19063,-5.990332 h -0.33486 l 0.23254,-1.330151 h 0.83716 l 1.24644,6.055444 h 0.0465 l -0.0558,1.265039 z m 2.57658,5.88801 2.32544,-13.208493 h 1.22784 l -2.32544,13.208493 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path373"></path><path d="m 214.74472,104.0152 q -1.32085,0 -2.04639,-0.72554 -0.72554,-0.72553 -0.72554,-2.04638 0,-1.674321 0.67903,-3.032377 0.68833,-1.367359 1.92547,-2.334741 1.23713,-0.967383 2.90215,-1.488282 1.66501,-0.520898 3.61838,-0.520898 h 0.17673 l -1.30224,7.366988 q -0.13023,0.76275 0.13952,1.16272 0.27906,0.39998 0.99529,0.39998 h 0.55811 l -0.18604,1.11621 h -0.5116 q -0.67902,0 -1.12551,-0.15813 -0.44648,-0.15813 -0.68833,-0.48369 -0.24184,-0.33486 -0.28835,-0.85576 -0.0465,-0.5209 0.0651,-1.24644 l 0.61392,0.11162 h -0.95809 l 0.46509,-0.79065 q -0.5488,1.68362 -1.67431,2.6045 -1.12552,0.92087 -2.6324,0.92087 z m 0.28835,-1.16272 q 1.54409,0 2.69751,-1.30225 1.15342,-1.30224 1.572,-3.683492 l 0.56741,-3.199805 0.76274,0.362769 q -1.63711,0.05581 -3.00447,0.539502 -1.35805,0.474389 -2.34404,1.292944 -0.97668,0.809253 -1.51619,1.897558 -0.5302,1.088306 -0.5302,2.371944 0,0.81856 0.47439,1.27435 0.47439,0.44648 1.32085,0.44648 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path375"></path><path d="m 224.42753,103.81986 1.25574,-7.115842 q 0.15813,-0.902271 -0.13023,-1.339453 -0.28835,-0.437183 -1.02319,-0.437183 -0.71624,0 -1.38596,0.195337 l -0.15813,-1.125512 q 0.39997,-0.120923 0.82785,-0.167432 0.42789,-0.05581 0.89297,-0.05581 1.42317,0 1.95337,0.79065 0.5395,0.781347 0.24185,2.409155 l -1.21853,6.84609 z m -2.40915,0 0.20463,-1.13481 h 6.43682 l -0.20464,1.13481 z m 4.23229,-3.1905 0.46509,-3.990454 h 0.38137 q 0.35347,-1.367359 1.21853,-2.111499 0.86507,-0.753443 2.14871,-0.753443 1.44177,0 2.04639,0.939478 0.60461,0.939477 0.35346,2.716113 h -1.25573 q 0.15813,-1.265039 -0.19534,-1.878955 -0.34416,-0.613916 -1.25574,-0.613916 -0.87436,0 -1.6278,0.539502 -0.75345,0.5302 -1.33946,1.776636 -0.58601,1.246435 -0.93948,3.376538 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path377"></path><path d="m 238.64235,91.811294 q -0.44648,0 -0.76274,-0.31626 -0.31626,-0.31626 -0.31626,-0.762744 0,-0.446485 0.31626,-0.762744 0.31626,-0.31626 0.76274,-0.31626 0.44649,0 0.76274,0.31626 0.31626,0.316259 0.31626,0.762744 0,0.446484 -0.31626,0.762744 -0.31625,0.31626 -0.76274,0.31626 z m 2.22312,10.464476 0.40928,0.94878 q -0.5302,0.32556 -1.11621,0.55811 -0.58601,0.22324 -1.34876,0.22324 -1.6092,0 -2.39985,-0.79065 -0.79065,-0.79065 -0.69763,-2.31614 0.0465,-0.69763 0.26975,-1.348754 0.23254,-0.660425 0.49299,-1.283643 0.26045,-0.623218 0.39998,-1.209228 0.26975,-1.051099 -0.19534,-1.590601 -0.46509,-0.539502 -1.5813,-0.539502 -0.88367,0 -1.70222,0.213941 l -0.19534,-1.106909 q 0.54881,-0.15813 1.09761,-0.204639 0.5488,-0.05581 1.09761,-0.05581 1.69292,0 2.39985,0.883667 0.71624,0.883667 0.29766,2.585889 -0.15813,0.660425 -0.40928,1.237134 -0.25115,0.567407 -0.45579,1.125512 -0.20464,0.558103 -0.25114,1.209223 -0.13953,2.02779 1.94406,2.02779 0.54881,0 0.95808,-0.13023 0.41858,-0.13022 0.98599,-0.43718 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path379"></path><path d="m 246.19816,102.84318 q 0.76274,0 1.62781,-0.24185 0.87436,-0.24184 1.68361,-0.68833 l 0.42788,1.00459 q -0.88366,0.5116 -1.88825,0.79995 -1.00459,0.28836 -1.93477,0.28836 -1.86965,0 -2.92075,-1.0511 -1.0511,-1.0604 -1.0511,-2.93936 0,-1.934762 0.66043,-3.330026 0.66972,-1.395263 1.89756,-2.148706 1.23713,-0.762744 2.93935,-0.762744 1.43247,0 2.23242,0.68833 0.79995,0.68833 0.79995,1.916162 0,1.823145 -1.96267,2.781226 -1.95337,0.958078 -5.46013,1.023198 l -0.19534,-1.051103 q 3.06028,-0.04651 4.70669,-0.716236 1.65572,-0.679028 1.65572,-1.981274 0,-0.697632 -0.5023,-1.097607 -0.50229,-0.399976 -1.41387,-0.399976 -1.27434,0 -2.20451,0.604614 -0.93018,0.604614 -1.44177,1.739429 -0.5023,1.125513 -0.5116,2.688208 0.009,1.348755 0.76274,2.111495 0.76275,0.76275 2.0929,0.76275 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path381"></path><path d="m 254.64564,103.81986 6.3232,-30.736405 h 3.38926 l -6.32322,30.736405 z m 0,0 0.55644,-2.66236 h 22.91529 l -0.53112,2.66236 z m 3.03514,-14.047832 0.55644,-2.684025 h 18.26143 l -0.55646,2.684025 z m 2.73162,-14.026194 0.55644,-2.662379 h 22.94062 l -0.55645,2.662379 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path383"></path><path d="m 279.73619,103.81986 2.33474,-13.208493 h 1.26504 l -2.33474,13.208493 z m 6.48332,0 1.15342,-6.557737 q 0.20464,-1.162719 -0.20464,-1.739428 -0.40927,-0.586011 -1.49758,-0.586011 -0.92087,0 -1.71152,0.539502 -0.79065,0.5302 -1.40457,1.776636 -0.61391,1.246435 -0.99529,3.376538 l 0.47439,-3.990454 h 0.38138 q 0.37207,-1.367359 1.30224,-2.111499 0.93948,-0.753443 2.32544,-0.753443 1.5999,0 2.24172,0.902271 0.65113,0.90227 0.34417,2.660302 l -1.14412,6.483323 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path385"></path><path d="m 293.12729,104.0059 q -1.48828,0 -2.21382,-0.69763 -0.71623,-0.69764 -0.71623,-2.1208 0,-0.39068 0.0651,-1.0139 0.0744,-0.623214 0.34416,-1.637106 l 1.38597,-5.2927 q 0.32556,-1.237134 -0.093,-1.823144 -0.40928,-0.586011 -1.69292,-0.586011 -0.33487,0 -0.67903,0.04651 -0.34417,0.03721 -0.68833,0.139526 l -0.22324,-1.097607 q 0.46508,-0.130225 0.93947,-0.186035 0.47439,-0.05581 0.94878,-0.05581 1.77664,0 2.48357,0.939478 0.71624,0.939477 0.23255,2.781225 l -1.34876,5.13457 q -0.28835,1.069702 -0.35346,1.683614 -0.0651,0.61392 -0.0651,0.90227 -0.0186,1.72083 1.85105,1.72083 0.5023,0 0.97669,-0.15813 0.48369,-0.16743 1.0604,-0.5116 l 0.43718,1.02319 q -0.61392,0.38138 -1.27434,0.59532 -0.65112,0.21394 -1.37666,0.21394 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path387"></path><path d="m 300.26395,102.75016 q 0.76274,0 1.62781,-0.24185 0.87436,-0.24184 1.68362,-0.68833 l 0.42788,1.00459 q -0.88367,0.5116 -1.88826,0.79995 -1.00459,0.28836 -1.93477,0.28836 -1.86965,0 -2.92075,-1.0511 -1.0511,-1.0604 -1.0511,-2.93936 0,-1.934762 0.66043,-3.330026 0.66972,-1.395263 1.89756,-2.148706 1.23713,-0.762744 2.93935,-0.762744 1.43247,0 2.23242,0.68833 0.79996,0.68833 0.79996,1.916162 0,1.823145 -1.96268,2.781226 -1.95336,0.958078 -5.46013,1.023198 l -0.19533,-1.051103 q 3.06027,-0.04651 4.70668,-0.716236 1.65572,-0.679028 1.65572,-1.981274 0,-0.697632 -0.5023,-1.097607 -0.50229,-0.399976 -1.41386,-0.399976 -1.27434,0 -2.20452,0.604614 -0.93018,0.604614 -1.44177,1.739429 -0.5023,1.125513 -0.5116,2.688208 0.009,1.348755 0.76274,2.111495 0.76275,0.76275 2.0929,0.76275 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path389"></path><path d="m 306.90872,103.81986 1.25574,-7.115842 q 0.15813,-0.902271 -0.13022,-1.339453 -0.28836,-0.437183 -1.0232,-0.437183 -0.71623,0 -1.38596,0.195337 l -0.15813,-1.125512 q 0.39998,-0.120923 0.82786,-0.167432 0.42788,-0.05581 0.89297,-0.05581 1.42316,0 1.95336,0.79065 0.53951,0.781347 0.24185,2.409155 l -1.21853,6.84609 z m -2.40915,0 0.20464,-1.13481 h 6.43681 l -0.20464,1.13481 z m 4.2323,-3.1905 0.46509,-3.990454 h 0.38137 q 0.35346,-1.367359 1.21853,-2.111499 0.86506,-0.753443 2.1487,-0.753443 1.44178,0 2.04639,0.939478 0.60461,0.939477 0.35347,2.716113 h -1.25574 q 0.15813,-1.265039 -0.19534,-1.878955 -0.34416,-0.613916 -1.25573,-0.613916 -0.87437,0 -1.62781,0.539502 -0.75344,0.5302 -1.33946,1.776636 -0.58601,1.246435 -0.93947,3.376538 z" class="${escape(null_to_empty(classes), true) + " svelte-108qjps"}"${add_attribute("style", style, 0)} id="path391"></path></g></g></svg>`;
});
const TopLeftBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let circleDims;
  let $left, $$unsubscribe_left;
  let $textMoveLeft, $$unsubscribe_textMoveLeft;
  let $top, $$unsubscribe_top;
  let $textMoveTop, $$unsubscribe_textMoveTop;
  let $size, $$unsubscribe_size;
  let $$unsubscribe_rows;
  let $$unsubscribe_columns;
  let $$unsubscribe_clientWidth;
  let $$unsubscribe_clientHeight;
  let $$unsubscribe_navTarget;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  $$unsubscribe_rows = subscribe(rows, (value) => value);
  $$unsubscribe_columns = subscribe(columns, (value) => value);
  $$unsubscribe_clientWidth = subscribe(clientWidth, (value) => value);
  $$unsubscribe_clientHeight = subscribe(clientHeight, (value) => value);
  $$unsubscribe_navTarget = subscribe(navTarget, (value) => value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { href } = $$props;
  let { text } = $$props;
  let { color } = $$props;
  let { textColor } = $$props;
  createEventDispatcher();
  let header = void 0;
  const top = tweened(-1845, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  const left = tweened(-1845, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_left = subscribe(left, (value) => $left = value);
  let textTop = -3136;
  let textLeft = 6054;
  const textMoveTop = tweened(textTop, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_textMoveTop = subscribe(textMoveTop, (value) => $textMoveTop = value);
  const textMoveLeft = tweened(textLeft, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_textMoveLeft = subscribe(textMoveLeft, (value) => $textMoveLeft = value);
  top.subscribe((value) => {
    if (!$navigating) {
      textTop = value + $size * 0.75;
      set_store_value(textMoveTop, $textMoveTop = textTop, $textMoveTop);
    }
  });
  left.subscribe((value) => {
    if (!$navigating) {
      textLeft = value + $size * 0.75;
      set_store_value(textMoveLeft, $textMoveLeft = textLeft, $textMoveLeft);
    }
  });
  let xMove = 50;
  let yMove = 50;
  navTarget.subscribe((value) => {
    if (value && value !== "top-left") {
      set_store_value(top, $top = -1 * $size, $top);
      set_store_value(left, $left = -1 * $size, $left);
      textMoveTop.subscribe((value2) => {
        textTop = value2;
      });
      textMoveLeft.subscribe((value2) => {
        textLeft = value2;
      });
      set_store_value(textMoveTop, $textMoveTop = $top, $textMoveTop);
      set_store_value(textMoveLeft, $textMoveLeft = $left, $textMoveLeft);
    }
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  circleDims = $size / 2;
  {
    {
      if (!$navigating) {
        set_store_value(top, $top = -2 * $size / 3, $top);
        set_store_value(left, $left = -2 * $size / 3, $left);
      }
    }
  }
  $$unsubscribe_left();
  $$unsubscribe_textMoveLeft();
  $$unsubscribe_top();
  $$unsubscribe_textMoveTop();
  $$unsubscribe_size();
  $$unsubscribe_rows();
  $$unsubscribe_columns();
  $$unsubscribe_clientWidth();
  $$unsubscribe_clientHeight();
  $$unsubscribe_navTarget();
  $$unsubscribe_navigating();
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fixed" style="${"left: " + escape($left, true) + "px; top: " + escape($top, true) + "px;"}"${add_attribute("height", $size, 0)}${add_attribute("width", $size, 0)} id="top-left-svg"><defs><radialGradient id="top-left-circle" fx="50%" fy="50%" cx="50%" cy="50%"><stop offset="15%" stop-color="#fff" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient></defs><circle role="link" tabindex="0" style="${"fill: rgb(var(" + escape(color, true) + ") / 0.2)"}" class="opacity-50"${add_attribute("cx", circleDims, 0)}${add_attribute("cy", circleDims, 0)}${add_attribute("r", circleDims, 0)}></circle><circle style="${"transform: translate(" + escape(xMove, true) + "px, " + escape(yMove, true) + "px);"}" class="pointer-events-none" fill="url('#top-left-circle')"${add_attribute("cx", circleDims, 0)}${add_attribute("cy", circleDims, 0)}${add_attribute("r", circleDims, 0)}></circle></svg> <h4 class="${"fixed text-4xl " + escape(textColor, true) + " pointer-events-none transition-transform duration-700"}" style="${"left: " + escape(textLeft, true) + "px; top: " + escape(textTop, true) + "px;"}"${add_attribute("this", header, 0)}>${escape(text)}</h4>`;
});
const TopRightBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let circleDims;
  let $left, $$unsubscribe_left;
  let $textMoveLeft, $$unsubscribe_textMoveLeft;
  let $top, $$unsubscribe_top;
  let $textMoveTop, $$unsubscribe_textMoveTop;
  let $size, $$unsubscribe_size;
  let $clientWidth, $$unsubscribe_clientWidth;
  let $clientHeight, $$unsubscribe_clientHeight;
  let $$unsubscribe_rows;
  let $$unsubscribe_columns;
  let $$unsubscribe_navTarget;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  $$unsubscribe_clientWidth = subscribe(clientWidth, (value) => $clientWidth = value);
  $$unsubscribe_clientHeight = subscribe(clientHeight, (value) => $clientHeight = value);
  $$unsubscribe_rows = subscribe(rows, (value) => value);
  $$unsubscribe_columns = subscribe(columns, (value) => value);
  $$unsubscribe_navTarget = subscribe(navTarget, (value) => value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { href } = $$props;
  let { text } = $$props;
  let { color } = $$props;
  let { textColor } = $$props;
  createEventDispatcher();
  let header = void 0;
  const top = tweened(-1845, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  const left = tweened(5685, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_left = subscribe(left, (value) => $left = value);
  let textTop = -3136;
  let textLeft = 6054;
  const textMoveTop = tweened(textTop, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_textMoveTop = subscribe(textMoveTop, (value) => $textMoveTop = value);
  const textMoveLeft = tweened(textLeft, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_textMoveLeft = subscribe(textMoveLeft, (value) => $textMoveLeft = value);
  top.subscribe((value) => {
    if (!$navigating) {
      textTop = value + $size * 0.75;
      set_store_value(textMoveTop, $textMoveTop = textTop, $textMoveTop);
    }
  });
  left.subscribe((value) => {
  });
  let xMove = 50;
  let yMove = 50;
  navTarget.subscribe((value) => {
    if (value && value !== "top-right") {
      set_store_value(top, $top = $clientHeight + $size, $top);
      set_store_value(left, $left = $clientWidth + $size, $left);
      textMoveTop.subscribe((value2) => {
        textTop = value2;
      });
      textMoveLeft.subscribe((value2) => {
        textLeft = value2;
      });
      set_store_value(textMoveTop, $textMoveTop = $top, $textMoveTop);
      set_store_value(textMoveLeft, $textMoveLeft = $left, $textMoveLeft);
    }
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  circleDims = $size / 2;
  {
    {
      if (!$navigating) {
        set_store_value(top, $top = -2 * $size / 3, $top);
        set_store_value(left, $left = $clientWidth + -1 * $size / 3, $left);
      }
    }
  }
  $$unsubscribe_left();
  $$unsubscribe_textMoveLeft();
  $$unsubscribe_top();
  $$unsubscribe_textMoveTop();
  $$unsubscribe_size();
  $$unsubscribe_clientWidth();
  $$unsubscribe_clientHeight();
  $$unsubscribe_rows();
  $$unsubscribe_columns();
  $$unsubscribe_navTarget();
  $$unsubscribe_navigating();
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fixed cursor-pointer" style="${"left: " + escape($left, true) + "px; top: " + escape($top, true) + "px;"}"${add_attribute("height", $size, 0)}${add_attribute("width", $size, 0)}><defs><radialGradient id="top-right-circle" fx="50%" fy="50%" cx="50%" cy="50%"><stop offset="15%" stop-color="#fff" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient></defs><circle id="top-right-svg" role="button" tabindex="0" style="${"fill: rgb(var(" + escape(color, true) + ") / 0.2)"}" class="opacity-50"${add_attribute("cx", circleDims, 0)}${add_attribute("cy", circleDims, 0)}${add_attribute("r", circleDims, 0)}></circle><circle style="${"transform: translate(" + escape(xMove, true) + "px, " + escape(yMove, true) + "px);"}" class="pointer-events-none" fill="url('#top-right-circle')"${add_attribute("cx", circleDims, 0)}${add_attribute("cy", circleDims, 0)}${add_attribute("r", circleDims, 0)}></circle></svg> <h4 class="${"fixed text-4xl " + escape(textColor, true) + " pointer-events-none transition-transform duration-700"}" style="${"left: " + escape(textLeft, true) + "px; top: " + escape(textTop, true) + "px;"}"${add_attribute("this", header, 0)}>${escape(text)}</h4>`;
});
const BottomBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let circleDims;
  let $top, $$unsubscribe_top;
  let $textMoveTop, $$unsubscribe_textMoveTop;
  let $size, $$unsubscribe_size;
  let $clientHeight, $$unsubscribe_clientHeight;
  let $$unsubscribe_rows;
  let $$unsubscribe_columns;
  let $clientWidth, $$unsubscribe_clientWidth;
  let $$unsubscribe_textMoveLeft;
  let $left, $$unsubscribe_left;
  let $$unsubscribe_navTarget;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  $$unsubscribe_clientHeight = subscribe(clientHeight, (value) => $clientHeight = value);
  $$unsubscribe_rows = subscribe(rows, (value) => value);
  $$unsubscribe_columns = subscribe(columns, (value) => value);
  $$unsubscribe_clientWidth = subscribe(clientWidth, (value) => $clientWidth = value);
  $$unsubscribe_navTarget = subscribe(navTarget, (value) => value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { href } = $$props;
  let { text } = $$props;
  let { color } = $$props;
  let { textColor } = $$props;
  createEventDispatcher();
  let header = void 0;
  const top = tweened(3083, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  const left = tweened(998, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_left = subscribe(left, (value) => $left = value);
  let textHeight = 0;
  let textTop = 3371;
  let textLeft = 1920;
  const textMoveTop = tweened(textTop, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_textMoveTop = subscribe(textMoveTop, (value) => $textMoveTop = value);
  const textMoveLeft = tweened(textLeft, { easing: cubicOut, duration: 1200 });
  $$unsubscribe_textMoveLeft = subscribe(textMoveLeft, (value) => value);
  top.subscribe((value) => {
    if (!$navigating) {
      textTop = value + $size * 0.14 - textHeight;
      set_store_value(textMoveTop, $textMoveTop = textTop, $textMoveTop);
    }
  });
  left.subscribe((value) => {
  });
  let xMove = 50;
  let yMove = 50;
  navTarget.subscribe((value) => {
    if (value && value !== "bottom") {
      set_store_value(top, $top = $clientHeight + $size, $top);
      textMoveTop.subscribe((value2) => {
        textTop = value2;
      });
      set_store_value(textMoveTop, $textMoveTop = $top, $textMoveTop);
    }
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  circleDims = $size / 2;
  {
    {
      if (!$navigating) {
        set_store_value(top, $top = $clientHeight - $size / 4, $top);
        set_store_value(left, $left = $clientWidth / 2 - $size / 2, $left);
      }
    }
  }
  $$unsubscribe_top();
  $$unsubscribe_textMoveTop();
  $$unsubscribe_size();
  $$unsubscribe_clientHeight();
  $$unsubscribe_rows();
  $$unsubscribe_columns();
  $$unsubscribe_clientWidth();
  $$unsubscribe_textMoveLeft();
  $$unsubscribe_left();
  $$unsubscribe_navTarget();
  $$unsubscribe_navigating();
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fixed" style="${"left: " + escape($left, true) + "px; top: " + escape($top, true) + "px;"}"${add_attribute("height", $size, 0)}${add_attribute("width", $size, 0)} id="bottom-svg"><defs><radialGradient id="bottom-circle" fx="50%" fy="50%" cx="50%" cy="50%"><stop offset="15%" stop-color="#fff" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#fff" stop-opacity="0"></stop></radialGradient></defs><circle role="link" tabindex="0" style="${"fill: rgb(var(" + escape(color, true) + ") / 0.2)"}"${add_attribute("cx", circleDims, 0)}${add_attribute("cy", circleDims, 0)}${add_attribute("r", circleDims, 0)}></circle><circle style="${"transform: translate(" + escape(xMove, true) + "px, " + escape(yMove, true) + "px);"}" class="pointer-events-none" fill="url('#bottom-circle')"${add_attribute("cx", circleDims, 0)}${add_attribute("cy", circleDims, 0)}${add_attribute("r", circleDims, 0)}></circle></svg> <h4 class="${"fixed text-4xl " + escape(textColor, true) + " pointer-events-none transition-transform duration-700"}" style="${"left: " + escape(textLeft, true) + "px; top: " + escape(textTop, true) + "px;"}"${add_attribute("this", header, 0)}>${escape(text)}</h4>`;
});
let scaler = 1;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-screen h-screen flex items-center justify-center">${validate_component(NameAnimation, "NameAnimation").$$render($$result, { scaler }, {}, {})} ${validate_component(TopLeftBubble, "TopLeftBubble").$$render(
    $$result,
    {
      textColor: "text-tertiary-900",
      color: "--color-tertiary-500",
      href: "/websites",
      text: "WebDev"
    },
    {},
    {}
  )} ${validate_component(TopRightBubble, "TopRightBubble").$$render(
    $$result,
    {
      textColor: "text-success-900",
      color: "--color-success-500",
      href: "/learning",
      text: "Tutoring"
    },
    {},
    {}
  )} ${validate_component(BottomBubble, "BottomBubble").$$render(
    $$result,
    {
      textColor: "text-error-900",
      color: "--color-error-500",
      href: "/resume",
      text: "Resume"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
