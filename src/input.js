import {prefix} from './utils/definitions';

import {html, LitElement, css} from 'lit-element';

class EikosInput extends LitElement {
    static get is(){return `${prefix}-input`;}
    static get properties(){
        return {
            classes: {type: String},
            isShown: {type: Boolean, attribute: 'is-shown'},
            disabled: {type: Boolean},
            placeholder: {
                converter: (value) => {
                    let newValue;
                    if(value === 'undefined' || value === 'null' || value === '') {
                        newValue = undefined;
                    }
                    else {
                        newValue = value;
                    }
                    return newValue;
                }
            },
            inputType: {type: String, attribute: 'input-type'},
            selected: {type: String},
            label: {type: String},
            step: {type: Number},
            useChangeCounter: {type: Boolean, attribute: 'use-change-counter'},
            changeCounter: {type: Number, attribute: false}
        };
    }
    static get styles(){
        return css`
            :host(){
                display: inline-block;
            }
            :host([hidden]){
                display: none;
            }
            .input-wrapper {
                border: 0;
                margin: 0;
                margin-top: 16px;
                margin-bottom: 8px;
                display: inline-flex;
                padding: 0;
                position: relative;
                min-width: 0;
                flex-direction: column;
                vertical-align: top;
                width: 100%;
            }
            .input-wrapper label {
                top: 0;
                left: 0;
                position: absolute;
                color: rgba(0, 0, 0, 0.54);
                padding: 0;
                font-size: 1rem;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                font-weight: 400;
                line-height: 1;
                letter-spacing: 0.00938em;
                transform: translate(0, 1.5px) scale(0.75);
                transform-origin: top left;
                transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
            }
            label + .input {
                margin-top: 16px;
            }
            .input {
                color: rgba(0, 0, 0, 0.87);
                cursor: text;
                display: inline-flex;
                position: relative;
                font-size: 1rem;
                box-sizing: border-box;
                align-items: center;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                line-height: 1.1875em;
            }
            .input input {
                font: inherit;
                color: currentColor;
                width: 100%;
                border: 0;
                height: 1.1875em;
                margin: 0;
                display: block;
                padding: 6px 0 7px;
                min-width: 0;
                background: none;
                box-sizing: content-box;
                -webkit-tap-highlight-color: transparent;
            }
        `;
    }
    constructor(){
        super();

        this.classes = '';
        this.isShown = true;
        this.disabled = false;
        this.inputType = 'text';
        this.placeholder = 'Please enter text';
        this.selected = '';
        this.step= '';
    }
    render(){
        return html`
        <div ?hidden="${!this.isShown}" class="input-wrapper ${this.classes}">
            ${this.label ? html`<label>${this.label}</label>` : ''}
            <div class="input">
                <input 
                    type=${this.inputType} 
                    ?disabled="${this.disabled}" 
                    placeholder="${this.placeholder || ''}"
                    .value="${this.selected}" 
                    @input="${this.inputChanged}"
                    ?step="${this.step}"
                />
            </div>
            <div id="counter" style="display:none">${this.changeCounter}</div>
        </div>
        `;
    }
    inputChanged(eve){
        eve.stopImmediatePropagation();
        let value = eve.target.value;
        let selected = this.inputType === 'number' ? Number(value) : value;
        this.selected = selected;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { selected },
            bubbles: true,
            composed: true
        }))
    }
    firstUpdated(changedProperties){
        if (changedProperties.has('useChangeCounter') && this.useChangeCounter){
            let counter = this.shadowRoot.getElementById('counter');
            counter.style = 'display:inline-block;position:absolute;right:0;bottom:-40px;background-color:#ccc;color:#000;height:26px;width:26px;text-align:center;line-height:26px;border:2px solid #eee;border-radius:5px;'
        }
    }
    updated(changedProperties){
        if(changedProperties.has('selected')){
            this.changeCounter = this.changeCounter === undefined ? 0 : this.changeCounter += 1;
        }
    }
}

customElements.define(EikosInput.is, EikosInput);