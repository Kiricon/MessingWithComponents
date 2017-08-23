export default class SimpleInput extends HTMLElement {
    constructor() {
        super(); 
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            Hello World: <span>0</span> 
        `;
        this.count = 0;
        this.increment();
    }

    increment() {
        this.count++;
        let self = this;
        setTimeout( () => {
            self.shadowRoot.querySelector('span').innerText = this.count;
            self.increment();
        }, 1000);
        
    }
}

window.customElements.define('simple-input', SimpleInput);