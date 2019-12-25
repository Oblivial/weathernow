const m = require("mithril");

const view = {

    view: (vnode) => {
        return  m("div", {id:vnode.attrs.id, class:vnode.attrs.class + " fixed-right-top bg-info border border-primary"}, m("ul", [
            m("li", m("a", {class:""}, "TestLink1")),
            m("li", m("a", {class:""}, "TestLink1")),
            m("li", m("a", {class:""}, "TestLink1"))
        ]));
      }
}

module.exports = view;
