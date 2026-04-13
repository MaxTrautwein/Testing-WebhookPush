window.addEventListener("load",() => main.init());

const main = {

    init(){
        const body = document.body;

        const btn = document.createElement("button");

        this.element = document.createElement("div")
        btn.appendChild(document.createTextNode("WoW"));
        this.element.appendChild(btn);
        btn.classList.add("move");
        this.element.classList.add("move2");
        body.appendChild(this.element);



    },
    element: undefined,

}