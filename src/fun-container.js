import SimpleInput  from "./simple-input";

export default class FunContainer extends HTMLElement {
    constructor() {
        super(); 
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                :host {
                    display: table;
                    padding: 10px;
                    border-radius: 3px;
                    margin: 10px;
                    background: green;
                    color: white;
                    font-family: sans-serif;
                }
            </style>
            <simple-input></simple-input>
        `;
    }

}

window.customElements.define('fun-container', FunContainer);