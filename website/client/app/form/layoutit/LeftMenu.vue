<template>
  <div class="elements-list">
    <div v-for="els in elhtml" :key="els">
      <div class="elements-header" v-text="els.name"></div>
      <ul class="nav row-cols-2">
        <li v-for="(el,name) of els.data" :key="name">
          <div :class="els.class">
            <div class="move">
              <a class="drag">
                <i :class="el.icon"></i>
                <span class="ml-1" v-text="el.name"></span>
              </a>
              <div class="action">
                <i class="fa fa-arrows"></i>
                <i class="fa fa-clone"></i>
                <i class="fa fa-trash-o"></i>
              </div>
            </div>
            <div class="view" v-html="el.html"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const elhtml = [
  {
    name: "布局字段",
    class: "grid",
    data: {
      label: {
        name: "栅格布局",
        icon: "fa fa-columns",
        html:
          '<div class="row"><div class="column col-12"></div><div class="column col-12"></div></div>',
        children: true
      },
      line: {
        name: "分割线",
        icon: "fa fa-minus",
        html: "<label>文本标签</label>",
        children: true
      }
    }
  },
  {
    name: "基础字段",
    class: "components",
    data: {
      label: {
        name: "文本标签",
        icon: "fa fa-font",
        html: "<label>文本标签</label>",
        children: true
      },
      input: {
        name: "单行输入框",
        icon: "fa fa-window-maximize",
        html:
          '<div class="form-group"><label>文本</label><input type="text" class="form-control"></div>',
        children: true
      },
      textarea: {
        name: "多行输入框",
        icon: "fa fa-wpforms",
        html:
          '<div class="form-group"><label>文本</label><textarea class="form-control"></textarea></div>',
        children: true
      },
      select: {
        name: "选择框",
        icon: "fa fa-list-ol",
        html:
          '<div class="form-group"><label>文本</label><select class="form-control" ><option>1</option><option>2</option></select></div>'
      },
      radio: {
        name: "单选框",
        icon: "fa fa-dot-circle-o",
        html:
          '<div class="custom-control custom-radio"><input type="radio" class="custom-control-input" id="radio1"><label class="custom-control-label" for="radio1">文本</label></div>',
        children: true
      },
      checkbox: {
        name: "复选框",
        icon: "fa fa-check-square-o",
        html:
          '<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check1"><label class="custom-control-label" for="check1">文本</label></div>',
        children: true
      },

      table: {
        name: "表格",
        icon: "fa fa-table",
        html:
          '<table class="table table-bordered"><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>',
        children: true
      }
    }
  },
  {
    name: "高级字段",
    class: "components",
    data: {
      check: {
        name: "切换开关",
        icon: "fa fa-toggle-on",
        html:
          '<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="switch1"><label class="custom-control-label" for="switch1">文本</label></div>',
        children: true
      },
      slider: {
        name: "进度条",
        icon: "fa fa-sliders",
        html:
          '<div class="progress"><div class="progress-bar" style="width: 50%"></div></div>',
        children: true
      }
    }
  }
];
export default {
  data() {
    return {
      elhtml: elhtml
    };
  },
  created() {
    // this.$nextTick(function() {
    //   $(".elements-list .grid").draggable({
    //     connectToSortable: ".page",
    //     cursor: "move",
    //     helper: "clone",
    //     drag: function(e, t) {
    //       t.helper.width(200);
    //     },
    //     start: function(e, t) {},
    //     stop: function(e, t) {
    //       $(".ui-draggable").removeAttr("style");
    //       $(".page .column").sortable({
    //         connectWith: ".column"
    //       });
    //     }
    //   });
    //   $(".elements-list .components").draggable({
    //     connectToSortable: ".page .column",
    //     cursor: "move",
    //     helper: "clone",
    //     drag: function(e, t) {
    //       t.helper.width(200);
    //     },
    //     stop: function(e, t) {
    //       $(".ui-draggable").removeAttr("style");
    //       $(".page .components").hover(
    //         function(e) {
    //           e.stopPropagation();
    //           console.log("鼠标移入");
    //         },
    //         function(e) {
    //           e.stopPropagation();
    //           console.log("鼠标移出");
    //         }
    //       );
    //     }
    //   });
    //   $(".page").sortable();
    // });
  }
};
</script>
