const m = require("mithril");

const view = {
    view: (vnode) => {
        return  m("div", {id:"fcItemHourlyCity" + vnode.attrs.cityName + vnode.attrs.id, class:"text-white flex-basis"}, [
                  	m("div", {id:"dateTempInfo", class:"rounded-top bg-dark"}, [
                  		m("label", {id:"date", class:"text-center width-full"}, vnode.attrs.data.Date.split("T")[0]),
                  		m("div", {id:"temperature", class:"d-flex justify-content-center"}, [
                  			m("div", {class:"flex-fill text-center"},
                          m("label", {id:"mintemp"}, String(parseInt((parseFloat(vnode.attrs.data.Temperature.Minimum.Value) - 32) / 1.8)).concat(" " + String.fromCharCode(176).concat("C")))
                        ),
                        m("div", {class:"flex-fill text-center"},
                          m("label", {id:"maxtemp"}, String(parseInt((parseFloat(vnode.attrs.data.Temperature.Maximum.Value) - 32) / 1.8)).concat(" " + String.fromCharCode(176).concat("C")))
                        )
                      ]
                  		)
                  	]),
                    m("div", {id:"witemday", class:"min-viewsize weather-image text-center weather-" + vnode.attrs.data.Day.Icon},
                      m("div", {class:"faded d-flex justify-content-center align-items-center min-viewsize"}, m("div", {id:"flexItemcontainer"},[
                        m("i", {class:"fas fa-sun"}), m("br"),m("label", {id:"phraseday"}, vnode.attrs.data.Day.IconPhrase),
                        m("label", {id:"precipitationday", class: vnode.attrs.data.Day.HasPrecipitation ? "" : "dnone"},
                          vnode.attrs.data.Day.HasPrecipitation ? "" : vnode.attrs.data.Day.PrecipitationIntensity
                        )
                    ]))),
                    m("div", {id:"placeholder", class:"bg-dark placeholder"}),
                    m("div", {id:"witemnight", class:"min-viewsize weather-image text-center weather-" + vnode.attrs.data.Night.Icon},
                      m("div", {class:"faded d-flex justify-content-center align-items-center min-viewsize"}, m("div", {id:"flexItemcontainer"},[
                        m("i", {class:"fas fa-moon"}), m("br"), m("label", {id:"phrasenight"}, vnode.attrs.data.Night.IconPhrase),
                        m("label", {id:"precipitationnight", class: vnode.attrs.data.Night.HasPrecipitation ? "" : "dnone"},
                          vnode.attrs.data.Night.HasPrecipitation ? "" : vnode.attrs.data.Night.PrecipitationIntensity
                        )
                    ]))),
                    m("div", {id:"placeholder", class:"rounded-bottom bg-dark placeholder"})
        ])
      }
}


module.exports = view;
