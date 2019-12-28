const m = require("mithril");
const moment = require('moment');

const convertTemperature = (value) => {
    return String(parseInt((parseFloat(value) - 32) / 1.8)).concat(" " + String.fromCharCode(176).concat("C"));
}


const view = {
    view: (vnode) => {
        console.log(vnode.attrs);
        return m("div", {
            id: "fcItemCity" + vnode.attrs.cityName + vnode.attrs.id,
            class: "text-white flex-basis min-viewsize hour-container"
        }, [
            m("div", {class:"placeholder bg-dark rounded-top"}),
            m("div", {class:"weather-" + vnode.attrs.data.WeatherIcon}, m("div", {class:"faded text-center"}, [
              m("div", {
                  id: "datetimecontainer"
              }, m("label", {
                  id: "time"
              }, moment(vnode.attrs.data.DateTime).format("ddd, hA"))),
              m("div", {
                  id: "temperaturePhrasecontainer"
              }, [m("label", {
                  id: "temperature"
              }, convertTemperature(vnode.attrs.data.Temperature.Value)), m("br"), m("label", {
                  id: "phrase"
              }, vnode.attrs.data.IconPhrase)])
            ])),
            m("div", {class:"placeholder bg-dark rounded-bottom"})
        ])
    }
}


module.exports = view;
