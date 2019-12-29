const m = require("mithril")

const apiKeys = [
    "yAFOldxViRmO9vaBf4NZH23HKSgPpVoD",
    "e3wPq5JCB0Kh3Peez3sqSZqoc3Srbwxa",
    "CTFuXV3uevbko0u0yXXohMDm1T82SBaH",
    "lsp68udgq2AmsnrGJ0hbUXGG85YgptrY",
    "QdcV6RI3DA4nGAWEHl10TzhUWlF5qU1M"
];

const Data = {
    cityName: "",
    hourly: false,
    setHourly: (value) => {
      Data.hourly = value;
    },
    unauthorized: false,
    apiKeyIndex: 0,
    setCityName: (value) => {
        Data.cityName = value;
    },
    fetchCurrentSelection: () => {
        if(Data.cityKey != ""){
            if(Data.hourly){
              Data.hourlyweather.fetch()
            }else{
              if(Data.weatherthisweek.DaysToFetch == 0){
                Data.weatherthisweek.setDaysToFetch(5)
              }
              Data.weatherthisweek.fetch();
            }
        }else{
          Data.getCityKey(Data.fetchCurrentSelection);
        }
    },
    xhr: (xhr) => {
      Data.xhrObject = xhr;
      return xhr;
    },
    cityKey: "",
    error: () => {
      if(Data.xhrObject.readyState===4){
        if(Data.xhrObject.status===0){
          console.error("xhr status 0: ", Data.xhrObject, "apiKeyIndex:" + Data.apiKeyIndex);
          if(Data.apiKeyIndex < 4){
            Data.apiKeyIndex++;
            Data.fetchCurrentSelection();
          }else{
            alert("Wetter API fehler :(");
          }
        }
      }
    },
    getCityKey: (callback) => {
        m.request({
            method: "GET",
            url: `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKeys[Data.apiKeyIndex]}&q=${Data.cityName}`,
            config: Data.xhr
        }).then((items) => {
            console.log(items)
            if (items && items[0]) {
                Data.cityKey = items[0].Key;
                if(callback){
                  callback();
                }
            }
        }).catch(() => {
            Data.error();
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
          Data.hourly = false;
            m.request({
                    method: "GET",
                    url: `http://dataservice.accuweather.com/forecasts/v1/daily/${Data.weatherthisweek.DaysToFetch}day/${Data.cityKey}?apikey=${apiKeys[Data.apiKeyIndex]}`,
                    config: Data.xhr
                })
                .then((items) => {
                    console.log(items);
                    Data.weatherthisweek.list = items;
                    Data.weatherthisweek.Text = items.Headline.Text;
                    Data.weatherthisweek.DailyForecasts = items.DailyForecasts;
                    Data.weatherthisweek.Category = items.Headline.Category;
            }).catch(() => {
                Data.error();
            })
        }
    },
    hourlyweather: {
        HoursToFetch: 0,
        HourlyForecasts: [],
        setHoursToFetch: (value) => {
            Data.hourlyweather.HoursToFetch = value
        },
        fetch: () => {
            console.log("requesting hours:" + Data.hourlyweather.HoursToFetch);
            m.request({
                    method: "GET",
                    url: `http://dataservice.accuweather.com/forecasts/v1/hourly/${Data.hourlyweather.HoursToFetch}hour/${Data.cityKey}?apikey=${apiKeys[Data.apiKeyIndex]}`,
                    config: Data.xhr
                })
                .then((items) => {
                    console.log("requested items: ", items);
                    Data.hourlyweather.HourlyForecasts = items;
                }).catch(() => {
                    Data.error();
                })
        }
    }
}

module.exports = Data;
