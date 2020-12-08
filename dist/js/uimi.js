/*!
* uimi.js v1.0.0
* A Vue.js 3.0 UI Library
* Copyright (c) 2019-2020 Yao Yi
* All rights reserved.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uimi = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  const prefix = "Ui";

  const install = function (app, opts = {}) {
      for (var key in this)
          if (key !== "install")
              app.component(prefix + key, this[key]);
  };

  var script = {
      name: "Avatar",
      props: {
          tag: { type: String, default: "span" },
          src: String,
          icon: String,
          name: { type: String, default: "" },
          size: { type: String },
          rounded: { type: String, default: "circle" },
          theme: { type: String, default: "primary" },
      },
      render(_ctx, _cache, $props, $setup, $data, $options) {
          const { tag, src, icon, name, size, rounded, theme } = $props;
          return vue.h(tag, {
              class: ["avatar", `rounded-${rounded}`, !src ? `badge-${theme}` : ""],
              style: size ? { width: size, height: size } : {},
          }, icon
              ? vue.h("i", { class: icon })
              : src
                  ? vue.h("img", { class: ["img-fluid"], src: src })
                  : vue.h("span", { class: ["small"] }, name.slice(-2)));
      },
  };

  script.__file = "src/components/avatar/avatar.vue";

  var index = {
      install,
      Avatar: script
  };

  const dropdownData = {
      show: {
          list: 0,
          id: -1
      }
  };

  function setToRefs(object, key) {
      if (!vue.isProxy(object[key])) {
          object[key] = vue.reactive(object[key]);
      }
  }

  var script$1 = {
      name: "Dropdown",
      props: {
          ButtonText: String,
          theme: { type: String, default: "primary" },
      },
      setup() {
          setToRefs(dropdownData, 'show');
          dropdownData.show.list++;
          const dropdownId = dropdownData.show.list;
          const show = vue.ref(false);
          const style = vue.reactive({});
          const showDropdown = () => dropdownData.show.id = dropdownData.show.id == dropdownId ? -1 : dropdownId;
          vue.watch(() => dropdownData.show.id, (showId) => {
              show.value = dropdownId === showId;
              style["z-index"] = showId !== -1 && !show.value ? 1000 : "";
          });
          return {
              show,
              style,
              showDropdown,
          };
      },
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: ["dropdown", { show: $setup.show }],
      onClick: _cache[1] || (_cache[1] = (...args) => ($setup.showDropdown && $setup.showDropdown(...args))),
      style: $setup.style
    }, [
      ($props.ButtonText)
        ? (vue.openBlock(), vue.createBlock("button", {
            key: 0,
            type: "button",
            class: ["btn dropdown-toggle", `btn-${$props.theme}`],
            textContent: vue.toDisplayString($props.ButtonText)
          }, null, 10 /* CLASS, PROPS */, ["textContent"]))
        : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default")
    ], 6 /* CLASS, STYLE */))
  }

  script$1.render = render;
  script$1.__file = "src/components/dropdown/dropdown.vue";

  var script$2 = {
      name: "DropdownMenu",
      props: {
          MenuItem: Array,
      },
      setup() {
          setToRefs(dropdownData, "show");
          const dropdownId = dropdownData.show.list;
          const show = vue.computed(() => dropdownId === dropdownData.show.id);
          return {
              show,
          };
      },
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: ["dropdown-menu", { show: $setup.show }]
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.MenuItem, (item) => {
          return (vue.openBlock(), vue.createBlock("a", {
            class: "dropdown-item",
            key: item,
            textContent: vue.toDisplayString(item)
          }, null, 8 /* PROPS */, ["textContent"]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */))
  }

  script$2.render = render$1;
  script$2.__file = "src/components/dropdown/dropdown-menu.vue";

  var index$1 = {
      install,
      Dropdown: script$1,
      DropdownMenu: script$2
  };

  var script$3 = {
      name: "Load",
      render() {
          return vue.h("div", {
              class: "spinner-border text-danger",
              style: {
                  position: "fixed",
                  top: "calc(50vh - 2rem)",
                  left: "calc(50vw - 2rem)",
                  width: "4rem",
                  height: "4rem",
                  "border-width": "0.25rem",
              },
          });
      },
  };

  script$3.__file = "src/components/load/load.vue";

  var index$2 = {
      install,
      Load: script$3
  };

  var script$4 = {
    name: "Pagination",
    props: {
      total: Number, //总条目数
      pageSize: Number, //每页显示条目个数
      pageCount: Number, //总页数
      currentPage: Number, //当前页数
      pagerCount: Number, //页码按钮数量
      hiddenMore: Boolean,
    },
    computed: {
      pagers() {
        const currentPage = this.currentPage;
        const pagerCount = this.pagerCount;
        const pageCount = this.pageCount;
        const pagers = [];
        const step = Math.ceil(pagerCount / 2) - 1; //步长

        let start = currentPage - step;
        if (start < 1) start = 1;
        let end = start + pagerCount - 1;
        if (end >= pageCount) end = pageCount;

        start = end - pagerCount + 1;
        if (start < 1) start = 1;
        for (let i = start; i <= end; i++) {
          let arr = { page: i };
          if (this.currentPage == i) arr.active = true;
          pagers.push(arr);
        }
        //add pager
        function addPagers(step, opts = []) {
          let pagerStart = currentPage - step;
          if (pagerStart < 1) pagerStart = 1;
          let left = { page: pagerStart };
          if (opts[0]) left.text = opts[0];
          if (pagerStart == currentPage) left.disabled = true;
          if (pagerStart == start || 1) console.log("start多余");

          pagers.unshift(left);
          let pagerEnd = currentPage + step;
          if (pagerEnd > pageCount) pagerEnd = pageCount;
          let right = { page: pagerEnd };
          if (pagerEnd == currentPage) right.disabled = true;
          if (opts[1]) right.text = opts[1];
          if (pagerEnd == end || pageCount) console.log("end多余");
          pagers.push(right);
        }
        //add
        addPagers(5, ["...", "..."]);
        //add more
        addPagers(pageCount);
        // pagers.unshift({ page: 1 });
        // pagers.push({ page: pageCount });
        // //add next
        addPagers(1, [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ]);

        console.log(start, end, pagers);
        return pagers;
      },
    },
    methods: {
      onPagerClick(page) {
        this.currentPage = page;
      },
    },
  };

  const _hoisted_1 = { class: "pagination" };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("ul", _hoisted_1, [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.pagers, (page) => {
        return (vue.openBlock(), vue.createBlock("li", {
          class: ["page-item", { active: page.active, disabled: page.disabled }],
          key: page
        }, [
          vue.createVNode("a", {
            class: "page-link",
            innerHTML: page.text || page.page,
            onClick: $event => ($options.onPagerClick(page.page))
          }, null, 8 /* PROPS */, ["innerHTML", "onClick"])
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ]))
  }

  script$4.render = render$2;
  script$4.__file = "src/components/pagination/pagination.vue";

  var index$3 = {
      install,
      Pagination: script$4
  };

  var script$5 = {
      name: "Table",
      props: {
          columns: Object,
          data: Object,
      },
      setup(props) {
          console.log("类型", typeof props.data, typeof props.data[0], props.data);
          const thead = vue.computed(() => !props.columns && props.data[0]
              ? Object.keys(props.data[0])
              : props.columns);
          return {
              thead,
          };
      },
  };

  const _hoisted_1$1 = { class: "table" };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("table", _hoisted_1$1, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createVNode("thead", null, [
          vue.createVNode("tr", null, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($setup.thead, (th, id) => {
              return (vue.openBlock(), vue.createBlock("th", {
                key: id,
                textContent: vue.toDisplayString(th)
              }, null, 8 /* PROPS */, ["textContent"]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]),
        vue.createVNode("tbody", null, [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.data, (tr, index) => {
            return (vue.openBlock(), vue.createBlock("tr", { key: index }, [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(tr, (td, id) => {
                return (vue.openBlock(), vue.createBlock("td", {
                  key: id,
                  textContent: vue.toDisplayString(td)
                }, null, 8 /* PROPS */, ["textContent"]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    ]))
  }

  script$5.render = render$3;
  script$5.__file = "src/components/table/table.vue";

  var index$4 = {
      install,
      Table: script$5
  };

  var vCollapse = {
      beforeMount(el, { value }) {
          el.classList.add("collapse");
          if (value)
              el.classList.add("show");
      },
      beforeUpdate(el, { value, oldValue }) {
          if (!value === !oldValue)
              return;
          el.style.height = value ? "0" : el.scrollHeight + "px";
          el.classList.replace("collapse", "collapsing");
          el.classList.toggle("show");
      },
      updated(el, { value, oldValue }) {
          if (!value === !oldValue)
              return;
          const styles = window.getComputedStyle(el);
          const timeout = Number(styles.transitionDuration.slice(0, -1).replace(',', '.')) * 1000;
          el.style.height = value ? el.scrollHeight + "px" : "0";
          setTimeout(() => {
              el.classList.replace("collapsing", "collapse");
              el.style.height = "";
          }, timeout);
      },
  };

  const treeData = {
      show: {},
      updateShow(pid, id) {
          this.show[pid] = this.show[pid] !== id ? id : "-1";
      },
  };

  var script$6 = {
      name: "TreeMenu",
      props: {
          pid: {
              type: [Number, String],
              default: 0,
          },
          accordion: {
              type: Boolean,
              default: true,
          },
          level: {
              type: Number,
              default: -1,
          },
          menu: {
              type: Object,
              default: {},
          },
          pidKey: {
              type: String,
              default: "pid",
          },
          data: {
              type: Object,
              required: true,
          },
          clickMenu: Function,
      },
      setup(props) {
          setToRefs(treeData, "show");
          const hasMenu = props.menu.hasOwnProperty(props.pidKey);
          const tag = hasMenu ? "li" : "nav";
          const menuClass = hasMenu ? "nav-item" : "tree";
          const childId = hasMenu ? props.menu.id : props.pid;
          const hasChild = vue.computed(() => props.data.hasOwnProperty(childId));
          const isActive = vue.ref(hasMenu ? false : true);
          const setActive = (pid, id) => {
              treeData.updateShow(pid, id);
              isActive.value = !isActive.value;
          };
          if (props.accordion) {
              vue.watch(() => treeData.show[props.menu[props.pidKey]], (showId) => (isActive.value = props.menu.id === showId));
          }
          const marginLeft = props.level > 0 ? { "margin-left": props.level + "em" } : {};
          return {
              hasMenu,
              tag,
              menuClass,
              childId,
              hasChild,
              isActive,
              setActive,
              marginLeft,
          };
      },
      render(_ctx, _cache, $props, $setup, $data, $options) {
          const _component_tree_menu = vue.resolveComponent("tree-menu");
          const { level, pidKey, menu, data, clickMenu } = $props;
          const { hasMenu, tag, menuClass, childId, hasChild, isActive, setActive, marginLeft, } = $setup;
          const aMenu = hasMenu
              ? vue.h("a", {
                  key: 0,
                  class: ["nav-link", { active: isActive }],
                  onClick: _cache[1] || (_cache[1] = () => (clickMenu(menu), setActive(menu[pidKey], menu.id))),
              }, [
                  vue.h("i", { class: "fa fa-home", style: marginLeft }),
                  vue.h("span", menu.name),
                  hasChild ? vue.h("i", { class: "fa fa-angle-down" }) : "",
              ])
              : "";
          const ulMenu = hasChild
              ? vue.withDirectives(vue.h("ul", { class: "nav" }, vue.renderList(data[childId], menu => vue.h(_component_tree_menu, { key: menu.id, level: level + 1, menu, pidKey, data, clickMenu, }))), [[vCollapse, isActive]])
              : "";
          console.log("tree性能测试");
          return vue.h(tag, { class: menuClass }, [aMenu, ulMenu]);
      },
  };

  script$6.__file = "src/components/tree/tree.vue";

  var index$5 = {
      install,
      Tree: script$6
  };

  const install$1 = function (app, opts = {}) {
      for (var key in this)
          if (key !== "install")
              this[key].install(app, opts);
  };

  exports.Avatar = index;
  exports.Dropdown = index$1;
  exports.Load = index$2;
  exports.Pagination = index$3;
  exports.Table = index$4;
  exports.Tree = index$5;
  exports.install = install$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=uimi.js.map
