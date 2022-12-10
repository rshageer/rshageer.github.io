class Menu {
    mainNav;
    navBar;
    menuBtn;
    closeBtn;
    firstLink;
    lastLink;
    isExpanded;

    constructor(){
        this.mainNav = document.querySelector('.nav-main');
        this.navBar = document.querySelector('.nav-main__bar');
        this.menuBtn = document.querySelector('.nav-main > button');
        this.closeBtn = document.querySelector('.nav-main__bar > header > button');
        this.firstLink = document.querySelector('.nav-main__links > li:first-child > a')
        this.lastLink = document.querySelector('.nav-main__links > li:last-child > a')
        
    }
    
    initialize(){
        this.menuBtn.addEventListener('click', this.#setupCallback(this.#toggleOpen));
        this.closeBtn.addEventListener('click', this.#setupCallback(this.#toggleOpen));
        this.lastLink.addEventListener('focusout', this.#setupCallback(this.#toggleOpen));
        this.navBar.addEventListener('transitionend', this.#setupCallback(this.#setOverlay));
    }

    #setupCallback(cb){
        const menu = this;
        return cb
    }
    #toggleOpen(){
        menu.isExpanded = menu.navBar.dataset.expanded === 'true';
        menu.navBar.dataset.expanded = !menu.isExpanded;
    }
    
    #setOverlay(){
        if(!menu.isExpanded){
            menu.mainNav.classList.add('overlay');
            menu.firstLink.focus();
        } else {
            menu.mainNav.classList.remove('overlay')
        }
    }
}
export const menu = new Menu()