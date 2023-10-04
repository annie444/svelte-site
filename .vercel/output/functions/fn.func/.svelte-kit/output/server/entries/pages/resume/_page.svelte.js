import { h as noop, c as create_ssr_component, i as compute_rest_props, a as subscribe, s as setContext, j as spread, k as escape_object, e as escape, b as add_attribute, g as getContext, o as onDestroy, d as createEventDispatcher, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable, d as derived } from "../../../chunks/index2.js";
import { f as now, l as loop, i as is_date, g as cubicInOut, q as quadInOut, h as disabled } from "../../../chunks/stores.js";
import "focus-options-polyfill";
import "devalue";
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_2, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
function writableSet(value = /* @__PURE__ */ new Set()) {
  const store = writable(value);
  const wrap = (method) => {
    return (...args) => {
      let output;
      store.update((value2) => {
        output = value2[method](...args);
        return value2;
      });
      return output;
    };
  };
  return {
    ...store,
    add: wrap("add"),
    delete: wrap("delete")
  };
}
const contextKey = {};
const clamp = (val, min, max) => {
  return val < min ? min : val > max ? max : val;
};
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {
}
const _ = {
  $(selector) {
    if (typeof selector === "string") {
      return document.querySelector(selector);
    }
    return selector;
  },
  extend(...args) {
    return Object.assign(...args);
  },
  addListeners(element, events, handler, opts = { passive: false }) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(
        events[i],
        handler,
        supportsPassive ? opts : false
      );
    }
  },
  removeListeners(element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (let i = 0; i < events.length; i++) {
      element.removeEventListener(events[i], handler);
    }
  },
  cumulativeOffset(element) {
    let top = 0;
    let left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return {
      top,
      left
    };
  },
  directScroll(element) {
    return element && element !== document && element !== document.body;
  },
  scrollTop(element, value) {
    let inSetter = value !== void 0;
    if (this.directScroll(element)) {
      return inSetter ? element.scrollTop = value : element.scrollTop;
    } else {
      return inSetter ? document.documentElement.scrollTop = document.body.scrollTop = value : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
  },
  scrollLeft(element, value) {
    let inSetter = value !== void 0;
    if (this.directScroll(element)) {
      return inSetter ? element.scrollLeft = value : element.scrollLeft;
    } else {
      return inSetter ? document.documentElement.scrollLeft = document.body.scrollLeft = value : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
  }
};
const defaultOptions = {
  container: "body",
  duration: 500,
  delay: 0,
  offset: 0,
  easing: cubicInOut,
  onStart: noop,
  onDone: noop,
  onAborting: noop,
  scrollX: false,
  scrollY: true
};
const abortEvents = [
  "mousedown",
  "wheel",
  "DOMMouseScroll",
  "mousewheel",
  "keydown",
  "touchmove"
];
const _scrollTo = (options) => {
  let {
    offset,
    duration,
    delay,
    easing,
    x = 0,
    y = 0,
    scrollX,
    scrollY,
    onStart,
    onDone,
    container,
    onAborting,
    element
  } = options;
  if (typeof offset === "function") {
    offset = offset();
  }
  const cumulativeOffsetContainer = _.cumulativeOffset(container);
  const cumulativeOffsetTarget = element ? _.cumulativeOffset(element) : { top: y, left: x };
  const initialX = _.scrollLeft(container);
  const initialY = _.scrollTop(container);
  const targetX = cumulativeOffsetTarget.left - cumulativeOffsetContainer.left + offset;
  const targetY = cumulativeOffsetTarget.top - cumulativeOffsetContainer.top + offset;
  const diffX = targetX - initialX;
  const diffY = targetY - initialY;
  let scrolling = true;
  let started = false;
  let start_time = now() + delay;
  let end_time = start_time + duration;
  function scrollToTopLeft(element2, top, left) {
    if (scrollX)
      _.scrollLeft(element2, left);
    if (scrollY)
      _.scrollTop(element2, top);
  }
  function start(delayStart) {
    if (!delayStart) {
      started = true;
      onStart(element, { x, y });
    }
    _.addListeners(container, abortEvents, stop, { passive: true });
  }
  function tick(progress) {
    scrollToTopLeft(
      container,
      initialY + diffY * progress,
      initialX + diffX * progress
    );
  }
  function stop() {
    scrolling = false;
    _.removeListeners(container, abortEvents, stop);
  }
  loop((now2) => {
    if (!started && now2 >= start_time) {
      start(false);
    }
    if (started && now2 >= end_time) {
      tick(1);
      stop();
      onDone(element, { x, y });
      return false;
    }
    if (!scrolling) {
      onAborting(element, { x, y });
      return false;
    }
    if (started) {
      const p = now2 - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t);
    }
    return true;
  });
  start(delay);
  tick(0);
  return stop;
};
const proceedOptions = (options) => {
  let opts = _.extend({}, defaultOptions, options);
  opts.container = _.$(opts.container);
  opts.element = _.$(opts.element);
  return opts;
};
const scrollTo = (options) => {
  return _scrollTo(proceedOptions(options));
};
const Parallax_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".parallax-container.svelte-15ph2c6{position:relative;overflow:hidden;box-sizing:border-box}",
  map: null
};
const Parallax = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "sections",
    "sectionHeight",
    "config",
    "threshold",
    "onProgress",
    "onScroll",
    "disabled",
    "scrollTo"
  ]);
  let $height, $$unsubscribe_height;
  let $top, $$unsubscribe_top;
  let $scrollTop, $$unsubscribe_scrollTop;
  let $layers, $$unsubscribe_layers;
  let $progress, $$unsubscribe_progress;
  let $$unsubscribe_y;
  let container;
  let innerHeight;
  let { sections = 1 } = $$props;
  let { sectionHeight = void 0 } = $$props;
  let { config = { stiffness: 0.017, damping: 0.26 } } = $$props;
  let { threshold = { top: 1, bottom: 1 } } = $$props;
  let { onProgress = void 0 } = $$props;
  let { onScroll = void 0 } = $$props;
  let { disabled: disabled2 = false } = $$props;
  const y = writable(0);
  $$unsubscribe_y = subscribe(y, (value) => value);
  const top = writable(0);
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  const height = writable(0);
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  const progress = spring(void 0, { ...config, precision: 1e-3 });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  const scrollTop = derived([y, top, height], ([$y, $top2, $height2], set) => {
    const dy = $y - $top2;
    const min = 0 - $height2 + $height2 * threshold.top;
    const max = $height2 * sections - $height2 * threshold.bottom;
    const step = clamp(dy, min, max);
    set(step);
  });
  $$unsubscribe_scrollTop = subscribe(scrollTop, (value) => $scrollTop = value);
  const setProgress = (scrollTop2, height2) => {
    if (height2 === 0) {
      progress.set(0);
      return;
    }
    const scrollHeight = height2 * sections - height2;
    progress.set(clamp(scrollTop2 / scrollHeight, 0, 1));
  };
  const layers = writableSet(/* @__PURE__ */ new Set());
  $$unsubscribe_layers = subscribe(layers, (value) => $layers = value);
  setContext(contextKey, {
    config,
    addLayer: (layer) => {
      layers.add(layer);
    },
    removeLayer: (layer) => {
      layers.delete(layer);
    }
  });
  const setDimensions = () => {
    height.set(sectionHeight ? sectionHeight : innerHeight);
    top.set(container.getBoundingClientRect().top + window.pageYOffset);
  };
  function scrollTo$1(section, { selector = "", duration = 500, easing = quadInOut } = {}) {
    const scrollTarget = $top + $height * (section - 1);
    const focusTarget = () => {
      document.querySelector(selector).focus({ preventScroll: true });
    };
    if (disabled2) {
      window.scrollTo({ top: scrollTarget });
      selector && focusTarget();
      return;
    }
    scrollTo({
      y: scrollTarget,
      duration,
      easing,
      onDone: selector ? focusTarget : () => {
      }
    });
  }
  if ($$props.sections === void 0 && $$bindings.sections && sections !== void 0)
    $$bindings.sections(sections);
  if ($$props.sectionHeight === void 0 && $$bindings.sectionHeight && sectionHeight !== void 0)
    $$bindings.sectionHeight(sectionHeight);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.onProgress === void 0 && $$bindings.onProgress && onProgress !== void 0)
    $$bindings.onProgress(onProgress);
  if ($$props.onScroll === void 0 && $$bindings.onScroll && onScroll !== void 0)
    $$bindings.onScroll(onScroll);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled2 !== void 0)
    $$bindings.disabled(disabled2);
  if ($$props.scrollTo === void 0 && $$bindings.scrollTo && scrollTo$1 !== void 0)
    $$bindings.scrollTo(scrollTo$1);
  $$result.css.add(css$2);
  {
    if (onScroll)
      onScroll($scrollTop);
  }
  {
    if (onProgress)
      setProgress($scrollTop, $height);
  }
  {
    if (onProgress)
      onProgress($progress ?? 0);
  }
  {
    $layers.forEach((layer) => {
      layer.setHeight($height);
    });
  }
  {
    $layers.forEach((layer) => {
      layer.setPosition($scrollTop, $height, disabled2);
    });
  }
  {
    if ($height !== 0)
      setDimensions();
  }
  $$unsubscribe_height();
  $$unsubscribe_top();
  $$unsubscribe_scrollTop();
  $$unsubscribe_layers();
  $$unsubscribe_progress();
  $$unsubscribe_y();
  return ` <div${spread(
    [
      escape_object($$restProps),
      {
        class: "parallax-container " + escape($$restProps.class ? $$restProps.class : "", true)
      },
      {
        style: "height: " + escape($height * sections, true) + "px; " + escape($$restProps.style ? $$restProps.style : "", true) + ";"
      }
    ],
    { classes: "svelte-15ph2c6" }
  )}${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const ParallaxLayer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".parallax-layer.svelte-qcp0z5{width:100%;position:absolute;box-sizing:border-box}",
  map: null
};
const ParallaxLayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translate;
  let $$restProps = compute_rest_props($$props, ["rate", "offset", "span", "onProgress"]);
  let $progress, $$unsubscribe_progress;
  let $coord, $$unsubscribe_coord;
  let { rate = 0.5 } = $$props;
  let { offset = 0 } = $$props;
  let { span = 1 } = $$props;
  let { onProgress = void 0 } = $$props;
  const { config, addLayer, removeLayer } = getContext(contextKey);
  const coord = spring(void 0, config);
  $$unsubscribe_coord = subscribe(coord, (value) => $coord = value);
  const progress = spring(void 0, { ...config, precision: 1e-3 });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  let height;
  if ($$props.rate === void 0 && $$bindings.rate && rate !== void 0)
    $$bindings.rate(rate);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.span === void 0 && $$bindings.span && span !== void 0)
    $$bindings.span(span);
  if ($$props.onProgress === void 0 && $$bindings.onProgress && onProgress !== void 0)
    $$bindings.onProgress(onProgress);
  $$result.css.add(css$1);
  translate = `translate3d(0px, ${$coord}px, 0px);`;
  {
    if (onProgress)
      onProgress($progress ?? 0);
  }
  $$unsubscribe_progress();
  $$unsubscribe_coord();
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: "parallax-layer " + escape($$restProps.class ? $$restProps.class : "", true)
      },
      {
        style: "" + escape($$restProps.style ? $$restProps.style : "", true) + "; height: " + escape(height, true) + "px; -ms-transform: " + escape(translate, true) + "; -webkit-transform: " + escape(translate, true) + "; transform: " + escape(translate, true) + ";"
      }
    ],
    { classes: "svelte-qcp0z5" }
  )}>${slots.default ? slots.default({ progress: $progress }) : ``} </div>`;
});
const StickyLayer_svelte_svelte_type_style_lang = "";
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  attributes.viewBox = box.left.toString() + " " + box.top.toString() + " " + boxWidth.toString() + " " + boxHeight.toString();
  return {
    attributes,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage2) => {
    const items = storage2.loaderCallbacks;
    if (items) {
      storage2.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage2) {
  if (!storage2.pendingCallbacksFlag) {
    storage2.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage2.pendingCallbacksFlag = false;
      const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage2.provider;
      const prefix = storage2.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage2], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage2) => {
    (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe2(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe: subscribe2,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function updateLastModified(storage2, lastModified) {
  const lastValue = storage2.lastModifiedCached;
  if (
    // Matches or newer
    lastValue && lastValue >= lastModified
  ) {
    return lastValue === lastModified;
  }
  storage2.lastModifiedCached = lastModified;
  if (lastValue) {
    for (const key in browserStorageConfig) {
      iterateBrowserStorage(key, (item) => {
        const iconSet = item.data;
        return item.provider !== storage2.provider || iconSet.prefix !== storage2.prefix || iconSet.lastModified === lastModified;
      });
    }
  }
  return true;
}
function storeInBrowserStorage(storage2, data) {
  if (!browserStorageStatus) {
    initBrowserStorage();
  }
  function store(key) {
    let func;
    if (!browserStorageConfig[key] || !(func = getBrowserStorage(key))) {
      return;
    }
    const set = browserStorageEmptyItems[key];
    let index;
    if (set.size) {
      set.delete(index = Array.from(set).shift());
    } else {
      index = getBrowserStorageItemsCount(func);
      if (!setBrowserStorageItemsCount(func, index + 1)) {
        return;
      }
    }
    const item = {
      cached: Math.floor(Date.now() / browserStorageHour),
      provider: storage2.provider,
      data
    };
    return setStoredItem(
      func,
      browserCachePrefix + index.toString(),
      JSON.stringify(item)
    );
  }
  if (data.lastModified && !updateLastModified(storage2, data.lastModified)) {
    return;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
}
function emptyCallback() {
}
function loadedNewIcons(storage2) {
  if (!storage2.iconsLoaderFlag) {
    storage2.iconsLoaderFlag = true;
    setTimeout(() => {
      storage2.iconsLoaderFlag = false;
      updateCallbacks(storage2);
    });
  }
}
function loadNewIcons(storage2, icons) {
  if (!storage2.iconsToLoad) {
    storage2.iconsToLoad = icons;
  } else {
    storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
  }
  if (!storage2.iconsQueueFlag) {
    storage2.iconsQueueFlag = true;
    setTimeout(() => {
      storage2.iconsQueueFlag = false;
      const { provider, prefix } = storage2;
      const icons2 = storage2.iconsToLoad;
      delete storage2.iconsToLoad;
      let api;
      if (!icons2 || !(api = getAPIModule(provider))) {
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          if (typeof data !== "object") {
            item.icons.forEach((name) => {
              storage2.missing.add(name);
            });
          } else {
            try {
              const parsed = addIconSet(
                storage2,
                data
              );
              if (!parsed.length) {
                return;
              }
              const pending = storage2.pendingIcons;
              if (pending) {
                parsed.forEach((name) => {
                  pending.delete(name);
                });
              }
              storeInBrowserStorage(storage2, data);
            } catch (err) {
              console.error(err);
            }
          }
          loadedNewIcons(storage2);
        });
      });
    });
  }
}
const loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage2 = getStorage(provider, prefix);
    const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage2) => {
    const { provider, prefix } = storage2;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(storage2, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(icon, props) {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const mode = props.mode || "svg";
  const componentProps = mode === "svg" ? { ...svgDefaults } : {};
  if (icon.body.indexOf("xlink:") === -1) {
    delete componentProps["xmlns:xlink"];
  }
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (mode === "svg") {
    Object.assign(componentProps, renderAttribs);
    if (style !== "") {
      componentProps.style = style;
    }
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    return {
      svg: true,
      attributes: componentProps,
      body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
    };
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  const url = svgToURL(html);
  const styles = {
    "--svg": url
  };
  const size = (prop) => {
    const value = renderAttribs[prop];
    if (value) {
      styles[prop] = fixSize(value);
    }
  };
  size("width");
  size("height");
  Object.assign(styles, commonProps, useMask ? monotoneProps : coloredProps);
  let customStyle = "";
  for (const key in styles) {
    customStyle += key + ": " + styles[key] + ";";
  }
  componentProps.style = customStyle + style;
  return {
    svg: false,
    attributes: componentProps
  };
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon, state, mounted, callback, onload) {
  function abortLoading() {
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  }
  if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
    state.name = "";
    abortLoading();
    return { data: { ...defaultIconProps, ...icon } };
  }
  let iconName;
  if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
    abortLoading();
    return null;
  }
  const data = getIconData(iconName);
  if (!data) {
    if (mounted && (!state.loading || state.loading.name !== icon)) {
      abortLoading();
      state.name = "";
      state.loading = {
        name: icon,
        abort: loadIcons([iconName], callback)
      };
    }
    return null;
  }
  abortLoading();
  if (state.name !== icon) {
    state.name = icon;
    if (onload && !state.destroyed) {
      onload(icon);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data, classes };
}
function generateIcon(icon, props) {
  return icon ? render({
    ...defaultIconProps,
    ...icon
  }, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".initial.svelte-18pv7pw{position:absolute;font-family:'Noto Serif Display';font-weight:200;font-size:80rem;text-shadow:1px 1px 2px rgba(0, 0, 0, 0.3)}.initial-a.svelte-18pv7pw{margin-right:20rem;margin-bottom:10rem;z-index:1000}.initial-e.svelte-18pv7pw{margin-left:20rem;margin-top:10rem}.headshot.svelte-18pv7pw{height:80rem;width:80rem;border-radius:100%;object-fit:cover}@media(min-width: 768px){.third-header.svelte-18pv7pw{writing-mode:vertical-rl;text-orientation:sideways-right;transform:rotate(180deg)}.grid-1.svelte-18pv7pw{grid-template-columns:1fr 1px 1fr 1px 1fr}.grid-2.svelte-18pv7pw{grid-template-columns:1fr 1px}.grid-3.svelte-18pv7pw{grid-template-columns:1fr 1px 1fr 1px 1fr 1px 1fr;grid-template-rows:repeat(2, 1fr)}.grid-4.svelte-18pv7pw{grid-template-columns:1fr 1px 1fr}.grid-5.svelte-18pv7pw{grid-template-columns:1fr}.grid-6.svelte-18pv7pw{row-gap:1rem;grid-template-columns:1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr;grid-template-rows:repeat(2, 1fr)}}div.svelte-18pv7pw,p.svelte-18pv7pw,h1.svelte-18pv7pw,h2.svelte-18pv7pw,h3.svelte-18pv7pw,header.svelte-18pv7pw,section.svelte-18pv7pw,span.svelte-18pv7pw,footer.svelte-18pv7pw{pointer-events:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $disabled, $$unsubscribe_disabled;
  $$unsubscribe_disabled = subscribe(disabled, (value) => $disabled = value);
  let parallax;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Parallax, "Parallax").$$render(
      $$result,
      {
        sections: 4,
        disabled: $disabled,
        this: parallax
      },
      {
        this: ($$value) => {
          parallax = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 0.5,
              rate: 0.1,
              span: 1,
              class: "flex flex-row justify-center items-center"
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row justify-center items-center max-w-[75%] svelte-18pv7pw">${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "ic:baseline-less-than",
                    width: 300,
                    height: 500,
                    color: "white"
                  },
                  {},
                  {}
                )} <p class="max-w-[75%] text-lg svelte-18pv7pw" data-svelte-h="svelte-sk62ag">Welcome to my personal website! You can call me Annie! I&#39;m a passionate machine learning
				engineer and medical researcher currently based in sunny Los Angeles, CA. My journey in the
				world of engineering started at the young age of six when I first laid hands on an Arduino,
				sparking a lifelong love affair with technology. Those early days laid the foundation for
				what would evolve into a thrilling and dynamic career. While my roots are firmly grounded in
				the fields of medical machine learning and embedded systems, my spirit of innovation knows
				no bounds. Fast forward to today, and you&#39;ll find me in the role of a Senior Software
				Engineer at WardrobeDepot. Here, I&#39;m fully immersed in the art of crafting efficient and
				innovative software solutions that propel modern businesses into the future. My journey in
				software engineering has been a rollercoaster of exciting experiences, ranging from hacking
				smart home devices to developing web applications that turbocharge productivity. Yet, my
				passion extends far beyond the lines of code. One of my stronges motivations is that of a
				more equitable world. It&#39;s an ambitious goal, but one that I wholeheartedly commit to. I
				view the ascent of modern technology as a double-edged sword. While it carries the promise
				of a brighter future, it also presents potential challenges if we are not vigilant. That&#39;s
				why I consistently position myself at the forefront of exploration, tirelessly delving into
				how AI and technology can serve humanity&#39;s betterment while skillfully avoiding potential
				pitfalls. Let&#39;s embark on a collective journey together through the realms of technology,
				machine learning, and the pursuit of a more just and equitable society!</p> ${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "ic:baseline-greater-than",
                    width: 300,
                    height: 500,
                    color: "white"
                  },
                  {},
                  {}
                )}</div>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 1.5,
              rate: 0.1,
              span: 1,
              class: "flex flex-col justify-center items-center"
            },
            {},
            {
              default: () => {
                return `<h1 class="h1 text-white svelte-18pv7pw" data-svelte-h="svelte-d0a2vv">Skills</h1> <div class="flex flex-row gap-2 md:gap-3 lg:gap-4 max-h-[25%] svelte-18pv7pw" data-svelte-h="svelte-t3jtff"><div class="flex flex-col m-2 svelte-18pv7pw"><h3 class="h3 text-white my-2 svelte-18pv7pw">Languages</h3> <ul class="list flex flex-col flex-wrap"><li>C/C++</li> <li>Python</li> <li>R</li> <li>MATLAB</li> <li>Shell</li> <li>PHP</li> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>Java</li> <li>Rust</li> <li>SQL</li></ul></div> <div class="flex flex-col m-2 svelte-18pv7pw"><h3 class="h3 text-white my-2 svelte-18pv7pw">AI/ML Concepts</h3> <ul class="list flex flex-col flex-wrap"><li>Deep Learning</li> <li>[ Convolutional ] Neural Networks</li> <li>[ Convolutional ] LSTMs</li> <li>Regression Algorithms</li> <li>Unsupervised Learning</li> <li>Supervised Learning</li> <li>GA/GP/Evolutionary Computing</li> <li>Image Processing</li> <li>Facial Recognition</li> <li>Reinforcement Learning</li> <li>Large Language Modeling</li> <li>Transformer Models</li> <li>A/B &amp; Multi-arm Testing</li> <li>Distributed Computing</li></ul></div> <div class="flex flex-col m-2 svelte-18pv7pw"><h3 class="h3 text-white my-2 svelte-18pv7pw">CS Concepts</h3> <ul class="list flex flex-col flex-wrap"><li>Memory Management</li> <li>MLOps &amp; DevOps &amp; GitOps</li> <li>Graph-QL &amp; gRPC &amp; REST APIs</li> <li>IP-SEC &amp; SSL/TLS</li> <li>GCS &amp; AWS &amp; Azure</li> <li>Complexity Optimization</li> <li>Object Oriented Programming</li> <li>Functional Programming</li> <li>L1 to L7 Networking</li> <li>Data Structures</li> <li>System Design</li> <li>Scalability Optimization</li></ul></div> <div class="flex flex-col m-2 svelte-18pv7pw"><h3 class="h3 text-white my-2 svelte-18pv7pw">Frameworks</h3> <ul class="list flex flex-col flex-wrap"><li>Tensorflow &amp; PyTorch</li> <li>Kubernetes &amp; Docker</li> <li>CUDAs + Keras</li> <li>NumPy &amp; Pandas</li> <li>Svelte</li> <li>Vue</li> <li>React</li> <li>Laravel</li> <li>Actix &amp; Axum</li> <li>Flask &amp; Django</li> <li>Drogon</li></ul></div></div>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 2.5,
              rate: -0.05,
              span: 1,
              class: "flex flex-col justify-center items-center"
            },
            {},
            {
              default: () => {
                return `<h1 class="h1 svelte-18pv7pw" data-svelte-h="svelte-1mszdqi">Let&#39;s Get In Touch!</h1>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 0,
              rate: 0.5,
              span: 1,
              class: "bg-black h-full flex justify-center items-center"
            },
            {},
            {
              default: () => {
                return `<img src="/headshot.webp" class="headshot svelte-18pv7pw" alt="Closeup headshot of a smiling blonde woman with a white headband and orange triangular earrings on.">`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 0,
              rate: 2.5,
              span: 1,
              class: "flex justify-center items-center h-full"
            },
            {},
            {
              default: () => {
                return `<span class="initial initial-a svelte-18pv7pw" data-svelte-h="svelte-1hbej8e">A</span> <span class="initial initial-e svelte-18pv7pw" data-svelte-h="svelte-12a7hpa">E</span>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 1,
              rate: 0.5,
              span: 1,
              class: "bg-white flex h-full justify-center items-start pointer-events-none"
            },
            {},
            {}
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 1,
              rate: 1.25,
              span: 1,
              class: "flex flex-col justify-center items-center pointer-events-none"
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-col lg:flex-row w-full justify-start justify-items-start items-center svelte-18pv7pw" data-svelte-h="svelte-9el87i"><h1 class="h1 lg:m-8 m-4 justify-self-start text-black third-header svelte-18pv7pw">Work Experience</h1> <span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-col md:grid grid-1 w-full justify-center items-center svelte-18pv7pw"><div class="mx-4 my-3 svelte-18pv7pw"><h2 class="card-header h2 text-black svelte-18pv7pw">Senior Software Engineer</h2> <section class="svelte-18pv7pw"><h3 class="text-black align-middle px-4 svelte-18pv7pw"><span class="h3 svelte-18pv7pw">Wardrobe Depot</span> - October 2021 to Present</h3> <ul class="list p-4 text-black"><li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Moved stack from Shopify to a customized full-stack web application utilizing a
									micro-services architecture on Kubernetes that easily scaled their customer
									bandwidth by 500% with an overall decrease in operating costs.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Conducted cross cloud cost analysis on AWS EC2 and S3, GCP GKE, and Akamai Suite
									to identify the cheapest architectures for each average monthly user saving over
									$1,200 in cloud costs monthly.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Designed git-triggered CI/CD pipelines with automated docker container
									optimization decreasing the time to production for new features by 3 weeks.</span></li></ul></section></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="mx-4 my-3 svelte-18pv7pw"><h2 class="card-header h2 text-black svelte-18pv7pw">Computational Analyst</h2> <section class="svelte-18pv7pw"><h3 class="text-black align-middle px-4 svelte-18pv7pw"><span class="h3 svelte-18pv7pw">Howard Hughes Medial Institute</span> - June 2022 to February 2023</h3> <ul class="list p-4 text-black"><li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Led and managed multiple projects focused on the integration cutting-edge AI &amp; ML
									technologies into their facial recognition and 2-photon neural microscopy analysis
									pipeline decreasing time to publication by 6 months.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Integrated neural and facial recognition pipelines creating an automated workflow
									increasing the number of experiments processed per day by over 200x.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Developed a novel protocol for quantifying rodent facial expressions providing the
									first ever real-time segmentation of rodent facial features.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Research in review for publication</span></li></ul></section></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="mx-4 my-3 svelte-18pv7pw"><h2 class="card-header h2 text-black svelte-18pv7pw">Bioinformatics Engineer</h2> <section class="svelte-18pv7pw"><h3 class="text-black align-middle px-4 svelte-18pv7pw"><span class="h3 svelte-18pv7pw">Carver College of Medicine</span> - May 2016 to August 2018</h3> <ul class="list p-4 text-black"><li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Designed multiple data analysis pipelines for histology analysis, confocal
									microscopy, CT/MRI data, and alignment &amp; quantification for genomics,
									transcriptomics, &amp; proteomics shaving an average of 1 year off the data analysis
									timeline.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Designed novel ML models for object recognition throughout microscopy and CT
									imaging with an accuracy of 95%, roughly twice as good as the previous approach.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Integrated all data processing with the university’s computational core,
									increasing data bandwidth by 500x.</span></li> <li class="li text-black"><span class="text-black svelte-18pv7pw">•</span> <span class="flex-auto text-black svelte-18pv7pw">Identified the primary maladaptive immune response in cystic fibrosis lung tissue.</span></li></ul></section></div></div></div> <div class="flex flex-col lg:flex-row w-full justify-items-start justify-start items-center svelte-18pv7pw" data-svelte-h="svelte-90qe0t"><h1 class="h1 lg:m-8 m-4 text-black third-header svelte-18pv7pw">Education</h1> <span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-col md:grid grid-2 max-w-[27%] min-w-[23rem] justify-items-start justify-start items-center svelte-18pv7pw"><div class="flex flex-col justify-items-start justify-start items-start mx-4 my-3 svelte-18pv7pw"><h2 class="h2 text-black text-left svelte-18pv7pw">Hampshire College</h2> <h3 class="h3 text-black text-left svelte-18pv7pw">Bachelors of the Arts</h3> <p class="pt-4 text-black text-left svelte-18pv7pw">I graduated in May 2022 with major focuses on Pre-Medicine and Computer Science. My
						thesis work looked at the intersections of neuroscience, identiy, and cutting-edge
						machine learning techniques in transcriptomics.</p></div></div></div> <div class="flex flex-col lg:flex-row w-full justify-items-start justify-start items-center svelte-18pv7pw" data-svelte-h="svelte-11cvhgd"><h1 class="h1 lg:m-8 m-4 text-black third-header svelte-18pv7pw">Projects</h1> <span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-row md:grid grid-3 justify-items-start justify-start items-center svelte-18pv7pw"><div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><a class="unstyled pointer-events-auto cursor-pointer" href="https://github.com/annie444/genetic-sgd"><h3 class="h3 text-black text-left svelte-18pv7pw">Lexicase Selection of Deep Neural Network Weights and Biases</h3></a> <p class="pt-4 text-black svelte-18pv7pw">A genetic algorithm for optimizing stochastic gradient decent during the training of
						neural networks using a lexicase selection algorithm as the fitness algorithm in order
						to <em><i>&quot;leap&quot;</i></em> out of a local minimum.</p></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><a class="unstyled pointer-events-auto cursor-pointer" href="/downloads/Bioinformatic_Approaches_to_Aligning_Non-Canonical_Splice-sites_Using_RNA-Seq_Data.pdf" download="Bioinformatic_Approaches_to_Aligning_Non-Canonical_Splice-sites_Using_RNA-Seq_Data.pdf"><h3 class="h3 text-black text-left svelte-18pv7pw">Non-Canonical Alignment and Quantification Techniques</h3></a> <p class="pt-4 text-black svelte-18pv7pw">A review of techniques used to align non-canonical splice sites in next-gen
						transcriptomics data to the reference genome without an undue bias for canonical
						splicing as well as a proposal for a novel RNA-Seq alignment algorithm.</p></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><h3 class="h3 text-black text-left svelte-18pv7pw"><em><i>Poo Wi-Fi</i></em> - Trash based public wireless internet</h3> <p class="pt-4 text-black svelte-18pv7pw">Wi-Fi enabled trash can that rewards people for cleaning up litter by providing public
						wifi based on how much litter is disguarded and how correctly it is sorted into their
						respective compartments for recycling and compost. Presented my work at the 2015
						InnovateIowa conference.</p></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><a class="unstyled pointer-events-auto cursor-pointer" href="https://github.com/annie444/SLEAPyFaces"><h3 class="h3 text-black text-left svelte-18pv7pw"><em><i>SLEAPyFaces</i></em> - Combine neural and facial data from across experiments in
							one line of code</h3></a> <p class="pt-4 text-black svelte-18pv7pw">A python library for the data extraction, transformation, and loading of videos of
						rodent faces and neural data for feature extraction and staticstical analysis.</p></div> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><a class="unstyled pointer-events-auto cursor-pointer" href="https://github.com/annie444/instacrawl"><h3 class="h3 text-black text-left svelte-18pv7pw"><em><i>InstaCrawl</i></em> - Instagram post scraper and algorithm performance analytics</h3></a> <p class="pt-4 text-black svelte-18pv7pw">A CLI tool written in python for scraping Instagram profiles and running the posts
						through Meta&#39;s various ML models from HuggingFace from image segmentation to semantic
						text categorization.</p></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><h3 class="h3 text-black text-left svelte-18pv7pw">Envision CR Youth: Humans of Cedar Rapids</h3> <p class="pt-4 text-black svelte-18pv7pw">Began a blog group in Cedar Rapids, IA to provide a platform for disenfranchised people
						to begin the discussions that people would usually shy away from. This project has been
						taken on by <a class="unstyled cursor-pointer pointer-events-auto" href="https://iowabig.org/">IowaBIG</a>.</p></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><h3 class="h3 text-black text-left svelte-18pv7pw">Evolution of Grapes: Vitis Herbarium</h3> <p class="pt-4 text-black svelte-18pv7pw">Partnered with Dr. Julie Kang at the University of Northern Iowa working on the
						evolution of the grape. The purpose of this project is to study the evolution of
						developmental, morphological, and molecular traits of species in the Vitaceae family. By
						studying the evolution of how traits such as leaves and berries evolved will give
						information on how the Vitis species and cultivars acquired their commercially
						successful traits.</p></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><h3 class="h3 text-black text-left svelte-18pv7pw">ACEs of Eastern Iowa</h3> <p class="pt-4 text-black svelte-18pv7pw">Implemented mindfulness training for elementary youth in under-represented communities
						around Cedar Rapids, IA. Organized town halls with the Cedar Rapids Community School
						District board focused on raising the voices of parents of children in under-represented
						communities.</p></div></div></div>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 2,
              rate: 0.5,
              span: 1,
              class: "bg-black flex h-full justify-center items-start pointer-events-none"
            },
            {},
            {}
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 2,
              rate: 1.25,
              span: 1,
              class: "flex flex-col justify-center items-center pointer-events-none"
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-col lg:flex-row w-full justify-items-start justify-start items-center svelte-18pv7pw" data-svelte-h="svelte-mwg4l"><h1 class="h1 lg:m-8 m-4 text-white third-header svelte-18pv7pw">Publications</h1> <span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-row md:grid grid-4 justify-items-start justify-start items-center svelte-18pv7pw"><div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><header class="text-2xl h2 text-white font-bold svelte-18pv7pw">Transduction of pig small airway epithelial cells and distal lung progenitor cells by
						AAV4</header> <section class="text-base text-slate-200 svelte-18pv7pw">O. Chen, S. E Mather, C. M Brommel, B. A Hamilton, A. Ehler, R. A Villacreses, R. E
						Girgis, M. Abou Alaiwa, D. A Stoltz, J. Zabner, X. Li</section> <footer class="text-xl text-slate-200 svelte-18pv7pw"><i>Cells</i> 2021 Apr 25
						<cite><a class="unstyled cursor-pointer pointer-events-auto" href="https://doi.org/10.3390/cells10051014">https://doi.org/10.3390/cells10051014</a></cite></footer></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><header class="text-2xl h2 text-white font-bold svelte-18pv7pw">V-type ATPase Mediates Airway Surface Liquid Acidification in Pig Small Airway
						Epithelial Cells</header> <section class="text-base text-slate-200 svelte-18pv7pw">X. Li, I. Thornell, R. Villacreses Rada, C. Brommel, L. Lu, S. Mather, A. Ehler, P.
						Karp, M. Welsh, J. Zabner</section> <footer class="text-xl text-slate-200 svelte-18pv7pw"><i>American Journal of Respiratory Cell and Molecular Biology</i> 2021 Mar 30
						<cite><a class="unstyled cursor-pointer pointer-events-auto" href="https://doi.org/10.1165/rcmb.2020-0349OC">https://doi.org/10.1165/rcmb.2020-0349OC</a></cite></footer></div></div></div> <div class="flex flex-col lg:flex-row w-full justify-items-start justify-between items-center svelte-18pv7pw" data-svelte-h="svelte-1nakgv1"><div class="flex flex-col lg:flex-row min-w-[60%] justify-items-start justify-start items-center svelte-18pv7pw"><h1 class="h1 lg:m-8 m-4 text-white third-header svelte-18pv7pw">Awards</h1> <span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-row md:grid grid-4 justify-items-start justify-start items-center svelte-18pv7pw"><div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><header class="text-2xl h2 text-white font-bold svelte-18pv7pw">Grand Prize</header> <section class="text-base text-slate-200 svelte-18pv7pw">Google Hackathon @ University of Illinois Urbana-Champagne</section> <footer class="text-xl text-slate-200 svelte-18pv7pw">March 2018</footer></div> <span class="divider-vertical h-20 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><header class="text-2xl h2 text-white font-bold svelte-18pv7pw">Belin Blank Scholar</header> <section class="text-base text-slate-200 svelte-18pv7pw">Belin Blank Summer Institute @ University of Iowa</section> <footer class="text-xl text-slate-200 svelte-18pv7pw">January 2013</footer></div></div></div> <div class="flex flex-col lg:flex-row min-w-[40%] justify-items-start justify-start items-center svelte-18pv7pw"><h1 class="h1 lg:m-8 m-4 text-white third-header svelte-18pv7pw">Certifications</h1> <span class="divider-vertical w-2 m-0 p-0 h-20 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-row md:grid grid-5 justify-items-start justify-start items-center svelte-18pv7pw"><div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><header class="text-2xl h2 text-white font-bold svelte-18pv7pw">Walking In Balance With All Our Relations</header> <section class="text-base text-slate-200 svelte-18pv7pw">Worked with Strong Oak, a representative of the North American Intertribal Coalition,
							on restorative justice techniques. This included training and practice of the
							techniques as well as regular meetings in the mountains of Western Massachusetts on
							Mi&#39;kmuq land.</section> <footer class="text-xl text-slate-200 svelte-18pv7pw">Visioning B.E.A.R. - May 2021</footer></div></div></div></div> <div class="flex flex-col lg:flex-row w-full justify-items-start justify-start items-center svelte-18pv7pw" data-svelte-h="svelte-18x0qx9"><h1 class="h1 lg:m-8 m-4 text-white third-header svelte-18pv7pw">Coursework</h1> <span class="divider-vertical w-2 m-0 p-0 h-30 justify-self-start svelte-18pv7pw"></span> <div class="flex flex-row md:grid grid-6 justify-items-start justify-start items-center svelte-18pv7pw"><div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Endocrinology</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Bioinformatics &amp; Computational Molecular Biology</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Engineering Computing</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Machine Learning</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Research in Artificial Intelligence</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Hormones and Behavior</span></div> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Organic Chemistry I &amp; II</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Linear &amp; Matrix Algebra</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Multi-Variate Calculus</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Methods in Microbiology</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Animal Physiology</span></div> <span class="divider-vertical h-10 svelte-18pv7pw"></span> <div class="flex flex-col mx-4 my-3 justify-items-start justify-start items-start svelte-18pv7pw"><span class="text-xl h3 text-white svelte-18pv7pw">Epigenetics</span></div></div></div>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 3,
              rate: 1.25,
              span: 0.75,
              class: "flex flex-row items-end justify-center"
            },
            {},
            {
              default: () => {
                return `<form action="?/send" method="POST" class="min-w-[50%] min-h-[75%] max-w-[100%] max-h-[95%]" data-svelte-h="svelte-1u6kj59"><label for="name" class="label p-2"><span class="text-xl h4 text-white svelte-18pv7pw">Name:</span> <input type="text" class="input cursor-pointer pointer-events-auto" name="name" id="name"></label> <label for="email" class="label p-2"><span class="text-xl h4 text-white svelte-18pv7pw">Email:</span> <input type="email" class="input cursor-pointer pointer-events-auto" name="email" id="email"></label> <label for="subject" class="label p-2"><span class="text-xl h4 text-white svelte-18pv7pw">Subject:</span> <input type="text" class="input cursor-pointer pointer-events-auto" name="subject" id="subject"></label> <label for="body" class="label p-2"><span class="text-xl h4 text-white svelte-18pv7pw">Message:</span> <textarea class="input cursor-pointer pointer-events-auto h-full" name="body" id="body"></textarea></label> <input type="submit" class="p-2 my-2 bg-white text-black h4 cursor-pointer pointer-events-auto hover:opacity-75 transition-all duration-300" value="Send"></form>`;
              }
            }
          )} ${validate_component(ParallaxLayer, "ParallaxLayer").$$render(
            $$result,
            {
              offset: 3.75,
              rate: 0.25,
              span: 0.25,
              class: "flex flex-col items-center justify-end"
            },
            {},
            {
              default: () => {
                return `<span class="h3 text-base p-4 text-slate-300 svelte-18pv7pw" data-svelte-h="svelte-11j4cvc">© Analetta Rae Marie Ehler ― 2023</span>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_disabled();
  return $$rendered;
});
export {
  Page as default
};
