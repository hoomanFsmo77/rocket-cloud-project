let temp=document.createElement('template')
temp.innerHTML=`
    <link rel="stylesheet" href="./css/main.css">
                <div class="card shadow p-1 px-3 mb-3">
                    <img src="" class="img-fluid" alt="">
                    <h5 class="mt-3 text-primary"> <slot name="title"></slot></h5>
                    <p><slot name="description"></slot></p>
                    <div>
                        <button class="btn btn-primary mt-1 mb-3">See more</button>
                    </div>
                </div>
`

class Value extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector('img').src=this.getAttribute('img')
    }
}

export default Value