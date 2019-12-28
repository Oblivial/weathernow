const m = require("mithril")

const apiKeys = [
    "e3wPq5JCB0Kh3Peez3sqSZqoc3Srbwxa",
    "CTFuXV3uevbko0u0yXXohMDm1T82SBaH",
    "lsp68udgq2AmsnrGJ0hbUXGG85YgptrY",
    "QdcV6RI3DA4nGAWEHl10TzhUWlF5qU1M"
];
const Data = {
    cityName: "",
    hourly: false,
    setHourly: (value) => {
      hourly = value;
    },
    apiKeyIndex: 2,
    setCityName: (value) => {
        Data.cityName = value;
    },
    fetchCurrentSelection: () => {
        console.log("fetching fetchCurrentSelection")
        if(Data.hourly){
          Data.hourlyweather.fetch()
        }else{
          if(Data.weatherthisweek.DaysToFetch == 0){
            Data.weatherthisweek.setDaysToFetch(5)
          }
          Data.weatherthisweek.fetch();
        }
    },
    validateResponse: (xhr) => {
        /*
        if(xhr.status==0 && Data.apiKeyIndex <= 2){
          Data.apiKeyIndex++;
          Data.weatherthisweek.fetch();
        }else if(xhr.status==0 && Data.apiKeyIndex >= 2 ){
          return undefined;
        }else{
          return xhr;
        }*/
        return xhr;
    },
    cityKey: "",
    getCityKey: (callback) => {
        m.request({
            method: "GET",
            url: `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKeys[Data.apiKeyIndex]}&q=${Data.cityName}`,
            config: Data.validateResponse
        }).then((items) => {
            if (items && items[0]) {
                console.log(items)
                Data.cityKey = items[0].Key;
                if(callback){
                  console.log("calling callback...")
                  callback();
                }
            }
        })
    },
    weatherthisweek: {
        DaysToFetch: 0,
        Text: "",
        DailyForecasts: [],
        Category: "",
        setDaysToFetch: (value) => {
            Data.weatherthisweek.DaysToFetch = value
        },
        list: [],
        fetch: () => {
            m.request({
                    method: "GET",
                    url: `http://dataservice.accuweather.com/forecasts/v1/daily/${Data.weatherthisweek.DaysToFetch}day/${Data.cityKey}?apikey=${apiKeys[Data.apiKeyIndex]}`
                })
                .then((items) => {
                    console.log(items);
                    Data.weatherthisweek.list = items;
                    Data.weatherthisweek.Text = items.Headline.Text;
                    Data.weatherthisweek.DailyForecasts = items.DailyForecasts;
                    Data.weatherthisweek.Category = items.Headline.Category;
            })
        }
    },
    hourlyweather: {
        HoursToFetch: 0,
        Text: "",
        HourlyForecasts: [],
        Category: "",
        setHoursToFetch: (value) => {
            Data.hourlyweather.HoursToFetch = value
        },
        list: [],
        fetch: () => {
            m.request({
                    method: "GET",
                    url: `http://dataservice.accuweather.com/forecasts/v1/hourly/${Data.hourlyweather.HoursToFetch}hour/${Data.cityKey}?apikey=${apiKeys[Data.apiKeyIndex]}`
                })
                .then((items) => {
                    console.log(items);
                    /*Data.weatherthisweek.list = items;
                    Data.weatherthisweek.Text = items.Headline.Text;
                    Data.weatherthisweek.DailyForecasts = items.DailyForecasts;
                    Data.weatherthisweek.Category = items.Headline.Category;*/
                })
        }
    }
}

module.exports = Data;
