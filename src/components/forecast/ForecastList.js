const m = require("mithril");
const Data = require("../WeatherDataResolver.js");
const ForeCastItem = require("./ForecastItem.js");
const ForeCastItemHourly = require("./ForecastItemHour.js");

const components = {
    view: () => {
        let components = [];
        if (Data.hourly && Data.hourlyweather.HourlyForecasts.length === Data.hourlyweather.HoursToFetch) {
            for (let i = 0; i < Data.hourlyweather.HoursToFetch; i++) {
                components.push(m(ForeCastItemHourly, {
                    id: i,
                    cityName: Data.cityName,
                    data: Data.hourlyweather.HourlyForecasts[i]
                }));
            }
        } else if(Data.weatherthisweek.DailyForecasts.length === Data.weatherthisweek.DaysToFetch){
              for (let i = 0; i < Data.weatherthisweek.DaysToFetch; i++) {
                  components.push(m(ForeCastItem, {
                      id: i,
                      cityName: Data.cityName,
                      data: Data.weatherthisweek.DailyForecasts[i]
                  }));
              }
        }
        return components;
    }

}

const view = {
    view: () => {
        return m("div", {
            id: "ForecastList",
            class: "container d-flex flex-row flex-wrap"
        }, m(components))
    }
}

module.exports = view;
