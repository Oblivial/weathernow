const m = require("mithril")

const apiKeys = [
                  "e3wPq5JCB0Kh3Peez3sqSZqoc3Srbwxa",
                  "CTFuXV3uevbko0u0yXXohMDm1T82SBaH",
                  "lsp68udgq2AmsnrGJ0hbUXGG85YgptrY",
                  "QdcV6RI3DA4nGAWEHl10TzhUWlF5qU1M"
                ];
const Data = {
  cityName: "",
  Text: "",
  DailyForecasts: [],
  Category: "",
  apiKeyIndex: 3,
  extract: {},
  switchApiKey: "",
  setCityName: (value) => {
        Data.cityName = value;
  },
  weatherthisweek: {
      list: [],
      fetch: () => {
        m.request({
            method: "GET",
            url: `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKeys[Data.apiKeyIndex]}&q=${Data.cityName}`,
            extract: Data.extract
        }).then((items) => {
            console.log(Data.extract);
            let Key = items[0].Key;
            m.request({
              method: "GET",
              url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${apiKeys[Data.apiKeyIndex]}`
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
