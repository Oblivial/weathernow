import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

const m = require("mithril");
const root = document.body;
const RootComponent = require("./components/Home.js");

try{
  m.mount(root, RootComponent);
}catch(e){
  console.error(e);
}
//m.render(document.body, <RootComponent />);
//m.mount(document.body, countryInput)
