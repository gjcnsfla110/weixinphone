"use strict";
const common_vendor = require("../../../../common/vendor.js");
const scale = "scale(1.2, 1.2)";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{ name: "u-mask" },
  __name: "u-mask",
  props: common_vendor.MaskProps,
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const zoomStyle = common_vendor.ref({ transform: "" });
    common_vendor.watch(
      () => props.show,
      (n) => {
        if (n && props.zoom) {
          zoomStyle.value.transform = "scale(1, 1)";
        } else if (!n && props.zoom) {
          zoomStyle.value.transform = scale;
        }
      }
    );
    const maskStyle = common_vendor.computed(() => {
      let style = {};
      style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      if (props.show)
        style.zIndex = props.zIndex ? props.zIndex : common_vendor.$u.zIndex.mask;
      else
        style.zIndex = -1;
      style.transition = `all ${Number(props.duration) / 1e3}s ease-in-out`;
      if (props.customStyle && Object.keys(props.customStyle).length) {
        style = {
          ...style,
          ...props.customStyle
        };
      }
      return style;
    });
    function click() {
      if (!props.maskClickAble)
        return;
      emit("click");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(maskStyle.value),
        b: common_vendor.s(zoomStyle.value),
        c: common_vendor.o(click),
        d: common_vendor.o(() => {
        }),
        e: props.zoom ? 1 : "",
        f: props.show ? 1 : ""
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-db7121f0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-pro/components/u-mask/u-mask.js.map
