const m = require("mithril");
const Data = require("../WeatherDataResolver.js");
const ForeCastItem = require("./ForeCastItem.js");

const components = {
      view: () => {
          if(Data.DailyForecasts.length != 0){
                let components = [];
                for(let i=0;i<5;i++){
                    components.push(m(ForeCastItem, {id: i, cityName:Data.cityName, data:Data.DailyForecasts[i]}));
                }
                return components;
         }
      }

}

const view = {
    view: () => {
        return  m("div", {id:"ForecastList", class:"container d-flex flex-row flex-wrap"}, m(components))
      }
}

module.exports = view;
