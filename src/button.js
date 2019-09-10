import {prefix} from './utils/definitions';

import {html, LitElement, css} from 'lit-element';

class EikosButton extends LitElement {
    static get is(){return `${prefix}-button`;}
    static get properties(){
        return {
            classes: {type: String},
            isShown: {type: Boolean, attribute: 'is-shown'},
            disabled: {type: Boolean}
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
            .action-button {
                display: inline-block;
                font-weight: 400;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border: 1px solid transparent;
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                cursor: pointer;
                border-radius: .25rem;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            .primary {
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
            }
            .secondary {
                color: #fff;
                background-color: #6c757d;
                border-color: #6c757d;
            }
            .success {
                color: #fff;
                background-color: #28a745;
                border-color: #28a745;
            }
            .danger {
                color: #fff;
                background-color: #dc3545;
                border-color: #dc3545;
            }
            .warning {
                color: #212529;
                background-color: #ffc107;
                border-color: #ffc107;
            }
            action-button[disabled]{
                cursor: none;
            }
        `;
    }
    constructor(){
        super();

        this.classes = '';
        this.isShown = true;
        this.disabled = false;
    }
    render(){
        return html`
        <div ?hidden="${!this.isShown}" ?disabled="${this.disabled}" class="action-button ${this.classes}">
            <slot></slot>
        </div>
        `;
    }
}

customElements.define(EikosButton.is, EikosButton);