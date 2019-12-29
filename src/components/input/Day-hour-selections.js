const m = require("mithril");
const SelectionItem = require("./SelectionItem.js");
const Data = require("../WeatherDataResolver.js");

const view = {
    activeitemid: 2,
    switchActiveitemid: (n) => {
      view.activeitemid = n;
    },
    dropdowndnone: true,
    openDropdown: () => {
      view.dropdowndnone = false;
    },
    fetchWeather: (hours) => {
      Data.hourly = true;
      Data.hourlyweather.HoursToFetch = hours;
      Data.hourlyweather.fetch();
    },
    closeDropdown: () => {
      view.dropdowndnone = true;
    },
    view: () => {
        return m("div", {
            class: "btn-group btn-group-toggle",
            "data-toggle": "buttons"
        }, [
            m(SelectionItem, {
                              id:"optionhrs",
                              itemid: 0,
                              text:"Hours",
                              activeitemid: view.activeitemid,
                              switchItemid: () => {view.switchActiveitemid(0);view.openDropdown();},
                              onclick: () => {if(view.dropdowndnone){view.openDropdown()}}
                            }
            ),
            m("div", {
                class: view.dropdowndnone ? "d-none" : "position-absolute bg-dark"
            }, [
                m("a", {
                    class: "dropdown-item text-white",
                    href: "#",
                    style: "margin-top: 2rem;",
                    onclick: () => {view.fetchWeather(1)}
                }, "1hrs."),
                m("a", {
                    class: "dropdown-item text-white",
                    href: "#",
                    onclick: () => {view.fetchWeather(12)}
                }, "12hrs.")
            ]),
            m(SelectionItem, {
                              id:"option1day",
                              itemid: 1,
                              text:"1 Day",
                              activeitemid: view.activeitemid,
                              switchItemid: () => {
                                view.switchActiveitemid(1);
                                view.closeDropdown();
                                Data.weatherthisweek.setDaysToFetch(1);
                                Data.weatherthisweek.fetch();
                              }
                            }
            ),
            m(SelectionItem, {
                              id:"option5days",
                             itemid: 2,
                             text:"5 Days",
                             activeitemid: view.activeitemid,
                             switchItemid: () => {
                               view.switchActiveitemid(2);
                               view.closeDropdown();
                               Data.weatherthisweek.setDaysToFetch(5);
                               Data.weatherthisweek.fetch();
                             }
                           }
            )
        ]);
    }
}
module.exports = view;
