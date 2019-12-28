const m = require("mithril");
const CountryInput = require("./CountryInput");
const Navbar = require("./Navbar");
const Menu = require("./navbar/Menu");
const ForecastList = require("./forecast/ForecastList");
const DaySelection = require("./input/Day-hour-selections.js");

const view = {
  view: (vnode) => {
      return  m("view", {class:"view"}, [
        m(Navbar),
        m("div", {class:"onclickPlaceHolder", onclick: () => {Menu.OnWindowClick();DaySelection.closeDropdown()}}, m(CountryInput)),
        m("div", {class:"onclickPlaceHolder", onclick: () => {Menu.OnWindowClick();DaySelection.closeDropdown()}}, m(ForecastList))
      ]);
  }
}

module.exports = view;
