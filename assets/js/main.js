import {menu} from './menu.js';


(function(){
    const components = [
        menu
    ]

    for(const component of components){
        component.initialize();
    }
})()
