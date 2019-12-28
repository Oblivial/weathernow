const m = require("mithril");

const view = {
    inputoptions: {
      type: "radio",
      name: "options",
      autocomplete: "off"
    },
    view: (vnode) => {
        view.inputoptions.id = vnode.attrs.id;
        view.inputoptions.checked = vnode.attrs.activeitemid == vnode.attrs.itemid ? true : false;
        view.inputoptions.itemid = vnode.attrs.itemid;
        view.inputoptions.onchange = vnode.attrs.switchItemid;
        if(vnode.attrs.onclick){
            view.inputoptions.onclick = vnode.attrs.onclick;
        }
        return m("label", {
                    class: vnode.attrs.activeitemid == vnode.attrs.itemid ?  "btn btn-secondary active" : "btn btn-secondary"
                },
                m("input", view.inputoptions), m.trust(vnode.attrs.text)
            )
    }
}

module.exports = view;
