const m = require("mithril");
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
                value: Data.weatherthisweek.cityName,
                required: true
            }),
            m("button", {onclick: Data.weatherthisweek.fetch, type: "Submit", class:"btn btn-primary"}, "Submit")
        ]))));
      }
}

module.exports = view;
