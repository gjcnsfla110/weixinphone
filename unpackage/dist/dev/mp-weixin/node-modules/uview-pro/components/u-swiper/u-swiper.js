"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{ name: "u-swiper" },
  __name: "u-swiper",
  props: common_vendor.SwiperProps,
  emits: ["click", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const uCurrent = common_vendor.ref(Number(props.current));
    common_vendor.watch(
      () => props.list,
      (nVal, oVal) => {
        if (nVal.length !== oVal.length)
          uCurrent.value = 0;
      }
    );
    common_vendor.watch(
      () => props.current,
      (n) => {
        uCurrent.value = Number(n);
      }
    );
    const justifyContent = common_vendor.computed(() => {
      if (props.indicatorPos == "topLeft" || props.indicatorPos == "bottomLeft")
        return "flex-start";
      if (props.indicatorPos == "topCenter" || props.indicatorPos == "bottomCenter")
        return "center";
      if (props.indicatorPos == "topRight" || props.indicatorPos == "bottomRight")
        return "flex-end";
      return "center";
    });
    const titlePaddingBottom = common_vendor.computed(() => {
      if (props.mode == "none")
        return "12rpx";
      if (["bottomLeft", "bottomCenter", "bottomRight"].includes(props.indicatorPos) && props.mode == "number") {
        return "60rpx";
      } else if (["bottomLeft", "bottomCenter", "bottomRight"].includes(props.indicatorPos) && props.mode != "number") {
        return "40rpx";
      } else {
        return "12rpx";
      }
    });
    const elCurrent = common_vendor.computed(() => Number(props.current));
    function listClick(index) {
      emit("click", index);
    }
    function change(e) {
      const current = e.detail.current;
      uCurrent.value = current;
      emit("change", current);
    }
    function animationfinish(e) {
    }
    __expose({ listClick, change, animationfinish });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(_ctx.list, (item, index, i0) => {
          return common_vendor.e({
            a: item[_ctx.name] || item,
            b: _ctx.title && item.title
          }, _ctx.title && item.title ? {
            c: common_vendor.t(item.title),
            d: common_vendor.s({
              "padding-bottom": titlePaddingBottom.value
            }),
            e: common_vendor.s(_ctx.titleStyle)
          } : {}, {
            f: common_vendor.o(($event) => listClick(index), index),
            g: common_vendor.n(uCurrent.value != index ? "u-list-scale" : ""),
            h: _ctx.effect3d && uCurrent.value != index ? "scaleY(0.9)" : "scaleY(1)",
            i: _ctx.effect3d && uCurrent.value != index ? "0 20rpx" : 0,
            j: index
          });
        }),
        b: _ctx.imgMode,
        c: `${_ctx.borderRadius}rpx`,
        d: elCurrent.value,
        e: common_vendor.o(change),
        f: common_vendor.o(animationfinish),
        g: _ctx.interval,
        h: _ctx.circular,
        i: _ctx.duration,
        j: _ctx.autoplay,
        k: _ctx.effect3d ? _ctx.effect3dPreviousMargin + "rpx" : "0",
        l: _ctx.effect3d ? _ctx.effect3dPreviousMargin + "rpx" : "0",
        m: _ctx.height + "rpx",
        n: _ctx.bgColor,
        o: _ctx.mode == "rect"
      }, _ctx.mode == "rect" ? {
        p: common_vendor.f(_ctx.list, (item, index, i0) => {
          return {
            a: index == uCurrent.value ? 1 : "",
            b: index
          };
        })
      } : {}, {
        q: _ctx.mode == "dot"
      }, _ctx.mode == "dot" ? {
        r: common_vendor.f(_ctx.list, (item, index, i0) => {
          return {
            a: index == uCurrent.value ? 1 : "",
            b: index
          };
        })
      } : {}, {
        s: _ctx.mode == "round"
      }, _ctx.mode == "round" ? {
        t: common_vendor.f(_ctx.list, (item, index, i0) => {
          return {
            a: index == uCurrent.value ? 1 : "",
            b: index
          };
        })
      } : {}, {
        v: _ctx.mode == "number"
      }, _ctx.mode == "number" ? {
        w: common_vendor.t(uCurrent.value + 1),
        x: common_vendor.t(_ctx.list.length)
      } : {}, {
        y: _ctx.indicatorPos == "topLeft" || _ctx.indicatorPos == "topCenter" || _ctx.indicatorPos == "topRight" ? "12rpx" : "auto",
        z: _ctx.indicatorPos == "bottomLeft" || _ctx.indicatorPos == "bottomCenter" || _ctx.indicatorPos == "bottomRight" ? "12rpx" : "auto",
        A: justifyContent.value,
        B: `0 ${_ctx.effect3d ? "74rpx" : "24rpx"}`,
        C: `${_ctx.borderRadius}rpx`
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-67bdb6ac"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-pro/components/u-swiper/u-swiper.js.map
