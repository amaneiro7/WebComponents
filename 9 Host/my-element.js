class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
   }
   getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
            <h2>
                <slot name="title"></slot>
            </h2>
            <p>
                <slot name="parrafo"></slot>
            </p>
            <slot></slot>
        </section>
        ${this.getStyles()}
    `;
    return template
   }
   getStyles() {
    return `
        <style>
            :host {
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background: gray;
                margin: 4px;
            }
            :host(.blue) {
                background: blue;
            }
            :host([yellow]) {
                background: yellow;
            }
            :host([yellow]) h2 {
                color: gray;
            }
            :host([yellow]) p {
                color: red;
            }
            :host-context(article.card) {
                display:block;
                max-width:100%;
            }
        </style>
    `
   }
   render() { 
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)) 
    }   
   connectedCallback() {
    this.render()
    }
}

customElements.define('my-element', myElement)