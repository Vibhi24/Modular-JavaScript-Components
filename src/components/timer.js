import { generateUniqueId } from "../utils/generateUniqueId.js";


export class Timer{
    constructor(){
        this.seconds = Number('00');
        this.minutes = Number('00');
        this.hours = Number('00');
        this.interval;
        this.uniqueTimerId = generateUniqueId({p:"timer"})
    }
    timerT(){
        this.hrs = "";
        this.mins = "";
        this.secs = "";
        
        (this.seconds++);
        if(this.seconds == 60){
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes == 60){
                this.minutes = 0;
                this.hours += 1;
            }
        }
        

    this.hrs = this.hours<10 ? "0"+this.hours : this.hours;
    this.mins = this.minutes<10 ? "0"+this.minutes : this.minutes;
    this.secs = this.seconds<10 ? "0"+this.seconds : this.seconds;
    const timerValue = document.getElementById(this.uniqueTimerId);
    timerValue.innerText = this.hrs + " : " + this.mins + " : " + this.secs;
    }

render(){
    const timerContainer = document.createElement('div');
    const timer = document.createElement('div');
    const outer_circle = document.createElement('div');
    const inner_circle = document.createElement('div');
    const timerParagraph = document.createElement('p')
    const buttonContainer = document.createElement('div') 
    const startBtn = document.createElement('button')
    const pauseBtn = document.createElement('button')
    const resetBtn = document.createElement('button')
    const  laps = document.createElement('div')

    timerParagraph.innerText = "00 : 00 : 00"

    timerContainer.id = "timerContainer"
    timer.classList.add('timer')
    outer_circle.classList.add('outer_circle')
    inner_circle.classList.add('inner_circle')
    timerParagraph.id = this.uniqueTimerId;
    buttonContainer.classList.add('buttonContainer')
    startBtn.id = 'start'
    pauseBtn.id = "pause"
    resetBtn.id = "reset"

    startBtn.addEventListener('click', () => {
        this.interval = setInterval(this.timerT.bind(this), 1000)
    })
    pauseBtn.addEventListener('click', () => {
            clearInterval(this.interval)
        })
    resetBtn.addEventListener('click', () => {
        
        clearInterval(this.interval)
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        const timerValue = document.getElementById(this.uniqueTimerId);
        timerValue.innerText = "00 : 00 : 00";
    })

    timerContainer.appendChild(timer)
    timer.appendChild(outer_circle)
    outer_circle.appendChild(inner_circle)
    inner_circle.appendChild(timerParagraph)
    timer.appendChild(buttonContainer)
    buttonContainer.appendChild(pauseBtn)
    buttonContainer.appendChild(startBtn)
    buttonContainer.appendChild(resetBtn)

    return timerContainer;
}
mount(el) {
    if (el) {
        el.appendChild(this.render());
        return;
    }
    document.body.appendChild(this.render());
    return;
}
}