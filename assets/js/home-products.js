
class HomeProductPanel {
    #header = document.querySelectorAll('.home-products__card-header');

    constructor() {
    }

    initialize() {
        if(!this.#checkPage()) return;
        this.#setupEvents();
    }

    #checkPage(){
        return this.#header ? true : false;
    }

    #setupEvents(){
        this.#header.forEach(node => node.addEventListener('click', this.#toggleExtension))
    }

    #toggleExtension(e){
        const panel = e.target.parentNode.dataset;
        const isExpanded = panel.expanded === 'true';
        panel.expanded = !isExpanded;
        
        const card = e.target.parentNode.parentNode;

        if(!isExpanded)
            card.classList.add('overlay');
        else 
            card.classList.remove('overlay');
    }
}

export const homeProductPanel = new HomeProductPanel();
