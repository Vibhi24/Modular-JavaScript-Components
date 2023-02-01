import { generateUniqueId } from "../utils/generateUniqueId.js";

export class Counter{
    constructor() {
        this.count = 0;
        this.uniqueCounterId = generateUniqueId({p:"counter"})
    }
    incrementCount() {
        this.count = this.count + 1;
        this.updateCount();
    }
    
    decrementCount() {
        this.count = this.count - 1;
        this.updateCount();
    }
    
    updateCount() {
        var countValue = document.getElementById(this.uniqueCounterId)
        countValue.innerText = `Count : ${this.count}`
    }

    render(){
        //create relevant HTML dom elements
            const counterContainer = document.createElement("div")
            const counter = document.createElement('div');
            const counterHeading = document.createElement("h1")
            const outer_circle = document.createElement('div');
            const inner_circle = document.createElement('div');
            const countPara = document.createElement("p")
            const buttonContainer = document.createElement("div");
            const incrementButton = document.createElement("button");
            const decrementButton = document.createElement("button");
        
        
            // add ids to button 
            counterContainer.id = 'counterContainer'
            counter.classList.add('counter')
            counterHeading.classList.add('counterHeading')
            outer_circle.classList.add('outer_circle')
            inner_circle.classList.add('inner_circle')
            countPara.id = this.uniqueCounterId;
            buttonContainer.classList.add("buttonContainer")
            incrementButton.id = "increment";
            decrementButton.id = "decrement";
        
            //add text to button
            counterHeading.innerText = "Counter";
            countPara.innerText = `Count : ${this.count}`;
        
            // adding event listener
            decrementButton.onclick = this.decrementCount.bind(this);
            incrementButton.addEventListener("click", this.incrementCount.bind(this))
        
            // add child element 
            counterContainer.appendChild(counter);
            // counter.appendChild(counterHeading)
            counter.appendChild(outer_circle)
            outer_circle.appendChild(inner_circle)
            inner_circle.appendChild(countPara);
            // counter.appendChild(countPara);
            counterContainer.appendChild(buttonContainer)
            buttonContainer.appendChild(incrementButton);
            buttonContainer.appendChild(decrementButton);
            const rootDiv = document.getElementById("root")
            rootDiv.appendChild(counterContainer)
            return counterContainer;
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
