/*!
* uimi.js v1.0.0
* A Vue.js 3.0 UI Library
* Copyright (c) 2019-2020 Yao Yi
* All rights reserved.
*/
import { isProxy, reactive, h } from 'vue';

const prefix = "Ui";

const install = function (app, opts = {}) {
    for (var key in this)
        if (key !== "install")
            app.component(prefix + key, this[key]);
};

function initRefs(object, key) {
    if (!isProxy(object[key])) {
        object[key] = reactive(object[key]);
    }
}

const dropdownData = {
    init() {
        initRefs(this, "show");
    },
    show: reactive({
        list: 0,
        id: -1
    }),
};

var script = {
    name: "Load",
    render() {
        return h("div", {
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

export default Load;
//# sourceMappingURL=uimi.esm.js.map
