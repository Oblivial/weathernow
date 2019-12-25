const m = require("mithril")

const apiKeys = ["e3wPq5JCB0Kh3Peez3sqSZqoc3Srbwxa", "CTFuXV3uevbko0u0yXXohMDm1T82SBaH"];

const Data = {
  cityName: "",
  Text: "",
  DailyForecasts: [],
  Category: "",
  setCityName: (value) => {
        Data.cityName = value;
  },
  weatherthisweek: {
      list: [],
      fetch: () => {
        m.request({
            method: "GET",
            url: `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKeys[1]}&q=${Data.cityName}`
        })
        .then((items) => {
            let Key = items[0].Key;
            m.request({
              method: "GET",
              url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${apiKeys[1]}`
            })
            .then((items) => {
              console.log(items);
              Data.weatherthisweek.list = items;
              Data.Text = items.Headline.Text;
              Data.DailyForecasts = items.DailyForecasts;
              Data.Category = items.Headline.Category;
            })
      })
    }
  }
}

module.exports = Data;
