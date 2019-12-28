const m = require("mithril");
const Ui = require("./Ui");


const view = {
  dnone: true,
  changeDropdownState: () => {
    view.dnone = !view.dnone
  },
  OnWindowClick: () => {
        view.dnone ? undefined : view.changeDropdownState();
  },
  view: () => {
      return m("div", {id:"menu-container", class:"pl-3"}, [
        m(Ui, {id: "nav-container", class: view.dnone ? "d-none" : ""}),
        m("div", {id:"menu", class:"rect-container border-left border-right border-info", onclick: view.changeDropdownState},
          m("div", {class:"rect"},
           m("svg", {class:"flex-svg", width:"60", height:"23"}, [
             m("rect", {x:"10", width:"40", height:"2", y:"0", style:"fill:rgb(225,225,225)"}),
             m("rect", {x:"10", width:"40", height:"2", y:"7", style:"fill:rgb(225, 225, 225)"}),
             m("rect", {x:"10", width:"40", height:"2", y:"14", style:"fill:rgb(225, 225, 225)"}),
             m("rect", {x:"10", width:"40", height:"2", y:"21", style:"fill:rgb(225, 225, 225)"})
           ])
         )
       )
    ])
  }
}

module.exports = view;
