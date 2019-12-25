const m = require("mithril");
const CountryInput = require("./CountryInput");
const Navbar = require("./Navbar");
const ForecastList = require("./forecast/ForecastList");

const view = {
  view: () => {
      return  m("view", {class:"view"}, [m(Navbar), m(CountryInput), m(ForecastList)]);
  }
}

module.exports = view;
