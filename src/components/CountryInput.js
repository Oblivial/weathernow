const m = require("mithril");
const DaySelection = require("./input/Day-hour-selections.js");
const Data = require("./WeatherDataResolver.js");

const view = {
      view: () => {
          return m("div", {class:"jumbotron d-flex align-items-center"},
          m("div", {class:"container"},
          m("form", {onsubmit: (e)=> {e.preventDefault()}},
          m("div", {id:"cIcontainer", class:"form-group"},[
            m("label", {for:"cityNameInput"}, "Enter a cityname to continue"),
            m("input[type=text]", {id: "cityNameInput", class:"form-control", placeholder:"e.g. Berlin",
                oninput: (e) => {
                  Data.setCityName(e.target.value);
                },
                onchange: () => {
                  Data.getCityKey(Data.fetchCurrentSelection);
                },
                value: Data.weatherthisweek.cityName,
                required: true
            }),
            m(DaySelection)
        ]))));
      }
}

module.exports = view;
