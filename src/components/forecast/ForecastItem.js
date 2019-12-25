const m = require("mithril");

const view = {
    view: (vnode) => {
        return  m("div", {id:"fcItemCity" + vnode.attrs.cityName + vnode.attrs.id, class:"flex-fill"}, [
                  	m("div", {id:"dateTempInfo"}, [
                  		m("label", {id:"date", class:"text-center"}, vnode.attrs.data.Date.split("T")[0]),
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
                    m("div", {id:"witemday", class:"jumbotron weather-" + vnode.attrs.data.Day.Icon}, [
                      m("label", "Day:"), m("label", {id:"phraseday"}, vnode.attrs.data.Day.IconPhrase),
                      m("label", {id:"precipitationday", class: vnode.attrs.data.Day.HasPrecipitation ? "" : "dnone"},
                        vnode.attrs.data.Day.HasPrecipitation ? "" : vnode.attrs.data.Day.PrecipitationIntensity
                      )
                    ]),
                    m("div", {id:"witemnight", class:"jumbotron weather-" + vnode.attrs.data.Night.Icon}, [
                      m("label", "Night:"), m("label", {id:"phrasenight"}, vnode.attrs.data.Night.IconPhrase),
                      m("label", {id:"precipitationnight", class: vnode.attrs.data.Night.HasPrecipitation ? "" : "dnone"},
                        vnode.attrs.data.Night.HasPrecipitation ? "" : vnode.attrs.data.Night.PrecipitationIntensity
                      )
                    ])
        ])
      }
}


module.exports = view;

/*



*/
