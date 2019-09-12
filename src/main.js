import './button';
import './input';

import {prefix} from './utils/definitions';
import {html, LitElement} from 'lit-element';

class EikosSampleApp extends LitElement {
    static get is(){return `${prefix}-sample-app`;}
    static get properties(){ return {};}
    render(){
        return html`
            <div><h3>Buttons</h3></div>
            <eikos-button classes="primary" @click="${e=>{alert('Clicked!!!!!');}}">Primary</eikos-button>
            <eikos-button classes="secondary">Secondary</eikos-button>
            <eikos-button classes="success">Success</eikos-button>
            <eikos-button classes="danger">Danger</eikos-button>
            <eikos-button classes="warning">Warning</eikos-button>
            <div><h3>Inputs</h3></div>
            <div style="height:40px;clear:both;">
                <eikos-input style="width:250px;float:left;margin-right:6px;"></eikos-input>
                <eikos-input style="width:250px;float:left;margin-right:6px;" label="Numeric" input-type="number" placeholder="Please enter a number"></eikos-input>
                <eikos-input style="width:250px;float:left;margin-right:6px;" label="Numeric Step 10" input-type="number" placeholder="Please enter a multiple of 10" step="10"></eikos-input>
                <eikos-input style="width:250px;float:left;margin-right:6px;" label="Disabled" placeholder="Disabled field" ?disabled="${true}"></eikos-input>
                <eikos-input style="width:250px;float:left;margin-right:6px;" label="Input with change counter" use-change-counter="${true}"></eikos-input>
            </div>
        `;
    }
}

customElements.define(EikosSampleApp.is, EikosSampleApp);