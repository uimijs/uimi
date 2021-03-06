/*!
* uimi.js v1.0.0
* A Vue.js 3.0 UI Library
* Copyright (c) 2019-2020 Yao Yi
* All rights reserved.
*/
'use strict';

var vue = require('vue');

const prefix = "Ui";

const install = function (app, opts = {}) {
    for (var key in this)
        if (key !== "install")
            app.component(prefix + key, this[key]);
};

function initRefs(object, key) {
    if (!vue.isProxy(object[key])) {
        object[key] = vue.reactive(object[key]);
    }
}

const dropdownData = {
    init() {
        initRefs(this, "show");
    },
    show: vue.reactive({
        list: 0,
        id: -1
    }),
};

var script = {
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

script.__file = "src/components/load/load.vue";

var Load = {
    install,
    Load: script
};

module.exports = Load;
//# sourceMappingURL=uimi.cjs.js.map
