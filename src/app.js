import { Counter } from "./components/counter.js";
import {Timer} from "./components/timer.js"

const root = document.getElementById("root");

// const counter1 = new Counter();
// counter1.mount(root);

// const counter2 = new Counter();
// counter2.mount(root);

const timer1 = new Timer();
timer1.mount(root);

const timer2 = new Timer();
timer2.mount(root);
