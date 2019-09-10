import './button';

import {prefix} from './utils/definitions';
import {html, LitElement} from 'lit-element';

class EikosSampleApp extends LitElement {
    static get is(){return `${prefix}-sample-app`;}
    static get properties(){ return {};}
    render(){
        return html`
            <div><h3>Buttons</h3></div>
            <eikos-button classes="primary">Primary</eikos-button>
            <eikos-button classes="secondary">Secondary</eikos-button>
            <eikos-button classes="success">Success</eikos-button>
            <eikos-button classes="danger">Danger</eikos-button>
            <eikos-button classes="warning">Warning</eikos-button>
        `;
    }
}

customElements.define(EikosSampleApp.is, EikosSampleApp);