import 'bootstrap';
import '../style/main.scss';
import '../images/logo.png';
import '../images/intro_cloud.svg'
import '../images/about.jpg';
import '../images/value-1.png';
import '../images/value-2.png';
import '../images/value-3.png';
import '../images/feature.png';
import '../images/plan-1.png'
import '../images/plan-2.png'
import '../images/plan-3.png'
import '../images/plan-4.png'
import Menu from "./components/Menu/Menu.js";
import Value from "./components/Value/Value.js";
import PureCounter from "@srexi/purecounterjs";
import AOS from 'aos';
import 'aos/dist/aos.css';
///////////////////////////////////
let menu=new Menu()
menu.render()
window.customElements.define('value-card',Value)
const pure = new PureCounter();
AOS.init();