export default class SimpleInput extends HTMLElement {
    constructor() {
        super(); 
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <span>Hello World</span>
        `;
    }
}

window.customElements.define('simple-input', SimpleInput);