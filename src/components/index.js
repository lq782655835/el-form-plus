import Component from "./el-form-plus.vue";

export { default as UElInputNumber } from "./el-component-warp/u-el-input-number.vue";
export { default as UElRadioGroup } from "./el-component-warp/u-el-radio-group.vue";
export { default as UElSelect } from "./el-component-warp/u-el-select.vue";
export { default as UElTooltip } from "./el-component-warp/u-el-tooltip.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("el-form-plus", Component);
}

// auto plugin install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use({
    install
  });
}

// export default
Component.install = install;
export default Component;
