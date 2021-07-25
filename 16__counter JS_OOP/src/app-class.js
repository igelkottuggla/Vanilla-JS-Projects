const getElement = (selection) => {
    const element = document.querySelector(selection);
    if(element) {
       return element;
    }
    throw new Error(`Please check '${selection}' selector, 
    no such element exists`)
}

class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;               
        
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);       
        
        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);   

        // calling function with argument
        // this.increaseBtn.addEventListener('click', this.performedAction.bind(this, 'INCREASE'));
        // this.decreaseBtn.addEventListener('click', this.performedAction.bind(this, 'DECREASE'));
        // this.resetBtn.addEventListener('click', this.performedAction.bind(this));
    }

    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;    
    }

    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;    
    }

    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;  
    }
    
    //tried merging actons in one using parameter
    // performedAction(operation){        
    //     if(operation === 'INCREASE') {
    //         this.value++;
    //         this.valueDOM.textContent = this.value;
    //     } else if(operation === 'DECREASE') {
    //         this.value--;
    //         this.valueDOM.textContent = this.value;
    //     } else {
    //         this.value = 0;
    //         this.valueDOM.textContent = this.value;
    //     }    
    //     return;
    // }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);