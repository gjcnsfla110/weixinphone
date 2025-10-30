"use strict";
const common_vendor = require("../../../../common/vendor.js");
const buttonPadding = 3;
const borderRadius = 5;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{ name: "u-subsection" },
  __name: "u-subsection",
  props: common_vendor.SubsectionProps,
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const listInfo = common_vendor.ref([]);
    const itemBgStyle = common_vendor.ref({
      width: 0,
      left: 0,
      backgroundColor: "#ffffff",
      height: "100%",
      transition: ""
    });
    const currentIndex = common_vendor.ref(Number(props.current));
    const firstTimeVibrateShort = common_vendor.ref(true);
    const instanceId = common_vendor.$u.guid();
    const instance = common_vendor.getCurrentInstance();
    common_vendor.watch(
      () => props.current,
      (nVal) => {
        currentIndex.value = Number(nVal);
        changeSectionStatus(currentIndex.value);
      },
      { immediate: true }
    );
    function initListInfo() {
      listInfo.value = props.list.map((val) => {
        if (typeof val !== "object") {
          return { width: 0, name: val };
        } else {
          return { ...val, width: 0 };
        }
      });
    }
    initListInfo();
    common_vendor.onMounted(() => {
      setTimeout(() => {
        getTabsInfo();
      }, 10);
    });
    const noBorderRight = common_vendor.computed(() => {
      return (index) => {
        if (props.mode !== "subsection")
          return "";
        let classs = "";
        if (index < props.list.length - 1)
          classs += " u-none-border-right";
        if (index === 0)
          classs += " u-item-first";
        if (index === props.list.length - 1)
          classs += " u-item-last";
        return classs;
      };
    });
    const textStyle = common_vendor.computed(() => {
      return (index) => {
        const style = {};
        if (props.mode === "subsection") {
          style.color = index === currentIndex.value ? "#ffffff" : props.activeColor;
        } else {
          style.color = index === currentIndex.value ? props.activeColor : props.inactiveColor;
        }
        if (index === currentIndex.value && props.bold)
          style.fontWeight = "bold";
        style.fontSize = props.fontSize + "rpx";
        return style;
      };
    });
    const itemStyle = common_vendor.computed(() => {
      return (index) => {
        const style = {};
        if (props.mode === "subsection") {
          style.borderColor = props.activeColor;
          style.borderWidth = "1px";
          style.borderStyle = "solid";
        }
        return style;
      };
    });
    const subsectionStyle = common_vendor.computed(() => {
      const style = {};
      style.height = common_vendor.index.upx2px(Number(props.height)) + "px";
      if (props.mode === "button") {
        style.backgroundColor = props.bgColor;
        style.padding = `${buttonPadding}px`;
        style.borderRadius = `${borderRadius}px`;
      }
      return style;
    });
    const itemBarStyle = common_vendor.computed(() => {
      const style = {};
      style.backgroundColor = props.activeColor;
      style.zIndex = 1;
      if (props.mode === "button") {
        style.backgroundColor = props.buttonColor;
        style.borderRadius = `${borderRadius}px`;
        style.bottom = `${buttonPadding}px`;
        style.height = common_vendor.index.upx2px(Number(props.height)) - buttonPadding * 2 + "px";
        style.zIndex = 0;
      }
      return Object.assign({}, itemBgStyle.value, style);
    });
    function changeSectionStatus(nVal) {
      if (props.mode === "subsection") {
        if (nVal === props.list.length - 1) {
          itemBgStyle.value.borderRadius = `0 ${buttonPadding}px ${buttonPadding}px 0`;
        }
        if (nVal === 0) {
          itemBgStyle.value.borderRadius = `${buttonPadding}px 0 0 ${buttonPadding}px`;
        }
        if (nVal > 0 && nVal < props.list.length - 1) {
          itemBgStyle.value.borderRadius = "0";
        }
      }
      setTimeout(() => {
        itemBgLeft();
      }, 10);
      if (props.vibrateShort && !firstTimeVibrateShort.value) {
        common_vendor.index.vibrateShort();
      }
      firstTimeVibrateShort.value = false;
    }
    function click(index) {
      if (index === currentIndex.value)
        return;
      currentIndex.value = index;
      changeSectionStatus(index);
      emit("change", index);
    }
    function getTabsInfo() {
      const view = common_vendor.index.createSelectorQuery().in(instance == null ? void 0 : instance.proxy);
      for (let i = 0; i < props.list.length; i++) {
        view.select(`#${instanceId} .u-item-${i}`).boundingClientRect();
      }
      view.exec((res) => {
        var _a;
        if (!res.length) {
          setTimeout(() => {
            getTabsInfo();
            return;
          }, 10);
        }
        res.map((val, index) => {
          listInfo.value[index].width = val.width;
        });
        if (props.mode === "subsection" || props.mode === "button") {
          itemBgStyle.value.width = ((_a = listInfo.value[0]) == null ? void 0 : _a.width) + "px";
        }
        itemBgLeft();
      });
    }
    function itemBgLeft() {
      if (props.animation) {
        itemBgStyle.value.transition = "all 0.35s";
      } else {
        itemBgStyle.value.transition = "all 0s";
      }
      let left = 0;
      listInfo.value.forEach((val, index) => {
        if (index < currentIndex.value)
          left += val.width ?? 0;
      });
      if (props.mode === "subsection") {
        itemBgStyle.value.left = left + "px";
      } else if (props.mode === "button") {
        itemBgStyle.value.left = left + buttonPadding + "px";
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(listInfo.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.s(textStyle.value(index)),
            c: common_vendor.s(itemStyle.value(index)),
            d: common_vendor.o(($event) => click(index), index),
            e: common_vendor.n(noBorderRight.value(index)),
            f: common_vendor.n(`u-item-${index}`),
            g: index
          };
        }),
        b: common_vendor.s(itemBarStyle.value),
        c: common_vendor.unref(instanceId),
        d: common_vendor.s(subsectionStyle.value)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-753bf5ed"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-pro/components/u-subsection/u-subsection.js.map
