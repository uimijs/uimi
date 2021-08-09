<template>
  <div class="elements-list">
    <div v-for="els in elhtml" :key="els">
      <div class="elements-header" v-text="els.name"></div>
      <ul class="nav row-cols-2">
        <li v-for="(el,name) of els.data" :key="name">
          <a :name="name" draggable="true" :ondragstart="drag">
            <i :class="el.icon"></i>
            <span v-text="el.name"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const elhtml = [
  {
    name: "基础字段",
    data: {
      label: {
        name: "文本标签",
        icon: "fa fa-font",
        html: '<div class="el"><label>文本标签</label></div>',
        children: true
      },
      input: {
        name: "单行输入框",
        icon: "fa fa-window-maximize",
        html: '<div class="el"><input type="text" class="form-control"></div>',
        children: true
      },
      textarea: {
        name: "多行输入框",
        icon: "fa fa-wpforms",
        html:
          '<div class="el"><textarea class="form-control"></textarea></div>',
        children: true
      },
      select: {
        name: "选择框",
        icon: "fa fa-list-ol",
        html:
          '<select class="form-control" ><option>1</option><option>2</option></select>'
      },
      radio: {
        name: "单选框",
        icon: "fa fa-dot-circle-o",
        html:
          '<div class="el"><input type="radio" class="form-check-input"></div>',
        children: true
      },
      checkbox: {
        name: "复选框",
        icon: "fa fa-check-square-o",
        html:
          '<div class="el"><input type="checkbox" class="form-check-input"></div>',
        children: true
      },

      table: {
        name: "表格",
        icon: "fa fa-table",
        html:
          '<div class="el"><table class="table table-bordered"><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>',
        children: true
      }
    }
  },
  {
    name: "高级字段",
    data: {
      check: {
        name: "切换开关",
        icon: "fa fa-toggle-on",
        html:
          '<div class="el"><input type="checkbox" class="form-check-input"></div>',
        children: true
      },
      slider: {
        name: "进度条",
        icon: "fa fa-sliders",
        html:
          '<div class="el"><input type="checkbox" class="form-check-input"></div>',
        children: true
      }
    }
  },
  {
    name: "布局字段",
    data: {
      label: {
        name: "栅格布局",
        icon: "fa fa-columns",
        html: '<div class="el"><label>文本标签</label></div>',
        children: true
      },
      line: {
        name: "分割线",
        icon: "fa fa-minus",
        html: '<div class="el"><label>文本标签</label></div>',
        children: true
      }
    }
  }
];
function drag(event) {
  console.log("el", event);
  const el = event.currentTarget;
}
export default {
  data() {
    return {
      elhtml: elhtml
    };
  },
  beforeCreate() {},
  methods: {},
  created() {
    this.$nextTick(function() {});
  }
};
</script>
