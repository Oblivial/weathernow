const m = require("mithril");
const Menu = require("./navbar/Menu")

const view = {
  view: () => {
      return m("navbar", {id: "header", class:"navbar sticky-top d-flex flex-row bg-dark border-bottom border-primary"}, [
        m("div", {id: "title-container", class:"pl-3 d-flex flex-row"},
          m("h1",{class:"text-light"} , "Weather"), m("h1", {class:"text-info"}, "now")
        ),
        m(Menu)
      ])
  }
}

module.exports = view;
