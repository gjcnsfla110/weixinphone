"use strict";
const common_vendor = require("../../../../common/vendor.js");
const __default__ = {
  name: "u-icon",
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  props: common_vendor.IconProps,
  emits: ["click", "touchstart"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const customClass = common_vendor.computed(() => {
      let classes = [];
      classes.push(props.customPrefix + "-" + props.name);
      if (props.customPrefix === "uicon") {
        classes.push("u-iconfont");
      } else {
        classes.push(props.customPrefix);
      }
      if (props.showDecimalIcon && props.inactiveColor && common_vendor.$u.config.type.includes(props.inactiveColor)) {
        classes.push("u-icon__icon--" + props.inactiveColor);
      } else if (props.color && common_vendor.$u.config.type.includes(props.color)) {
        classes.push("u-icon__icon--" + props.color);
      }
      return classes;
    });
    const iconStyle = common_vendor.computed(() => {
      const style = {
        fontSize: props.size === "inherit" ? "inherit" : common_vendor.$u.addUnit(props.size),
        fontWeight: props.bold ? "bold" : "normal",
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: common_vendor.$u.addUnit(props.top)
      };
      if (props.showDecimalIcon && props.inactiveColor && !common_vendor.$u.config.type.includes(props.inactiveColor)) {
        style.color = props.inactiveColor;
      } else if (props.color && !common_vendor.$u.config.type.includes(props.color)) {
        style.color = props.color;
      }
      return style;
    });
    const isImg = common_vendor.computed(() => {
      return props.name.indexOf("/") !== -1;
    });
    const imgStyle = common_vendor.computed(() => {
      const style = {
        width: props.width ? common_vendor.$u.addUnit(props.width) : common_vendor.$u.addUnit(props.size),
        height: props.height ? common_vendor.$u.addUnit(props.height) : common_vendor.$u.addUnit(props.size)
      };
      return style;
    });
    const decimalIconStyle = common_vendor.computed(() => {
      const style = {
        fontSize: props.size === "inherit" ? "inherit" : common_vendor.$u.addUnit(props.size),
        fontWeight: props.bold ? "bold" : "normal",
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: common_vendor.$u.addUnit(props.top),
        width: props.percent + "%"
      };
      if (props.color && !common_vendor.$u.config.type.includes(props.color)) {
        style.color = props.color;
      }
      return style;
    });
    const decimalIconClass = common_vendor.computed(() => {
      let classes = [];
      classes.push(props.customPrefix + "-" + props.name);
      if (props.customPrefix === "uicon") {
        classes.push("u-iconfont");
      } else {
        classes.push(props.customPrefix);
      }
      if (props.color && common_vendor.$u.config.type.includes(props.color)) {
        classes.push("u-icon__icon--" + props.color);
      } else {
        classes.push("u-icon__icon--primary");
      }
      return classes;
    });
    const labelStyle = common_vendor.computed(() => {
      return {
        color: props.labelColor,
        fontSize: common_vendor.$u.addUnit(props.labelSize),
        marginLeft: props.labelPos === "right" ? common_vendor.$u.addUnit(props.space || props.marginLeft) : 0,
        marginTop: props.labelPos === "bottom" ? common_vendor.$u.addUnit(props.space || props.marginTop) : 0,
        marginRight: props.labelPos === "left" ? common_vendor.$u.addUnit(props.space || props.marginRight) : 0,
        marginBottom: props.labelPos === "top" ? common_vendor.$u.addUnit(props.space || props.marginBottom) : 0
      };
    });
    function onClick() {
      emit("click", props.index);
    }
    function onTouchstart() {
      emit("touchstart", props.index);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isImg.value
      }, isImg.value ? {
        b: _ctx.name,
        c: _ctx.imgMode,
        d: common_vendor.s(imgStyle.value)
      } : common_vendor.e({
        e: _ctx.showDecimalIcon
      }, _ctx.showDecimalIcon ? {
        f: common_vendor.s(decimalIconStyle.value),
        g: common_vendor.n(decimalIconClass.value),
        h: _ctx.hoverClass
      } : {}, {
        i: common_vendor.n(customClass.value),
        j: common_vendor.s(iconStyle.value),
        k: _ctx.hoverClass,
        l: common_vendor.o(onTouchstart)
      }), {
        m: _ctx.label !== ""
      }, _ctx.label !== "" ? {
        n: common_vendor.t(_ctx.label),
        o: common_vendor.s(labelStyle.value)
      } : {}, {
        p: common_vendor.s(_ctx.customStyle),
        q: common_vendor.o(onClick),
        r: common_vendor.n("u-icon--" + _ctx.labelPos)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b85e76d0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-pro/components/u-icon/u-icon.js.map
