import { menu } from './menu.js';
import { homeProductPanel } from './home-products.js';

(function(){
    const components = [
        menu,
        homeProductPanel,
    ]

    for(const component of components){
        component.initialize();
    }
})()
