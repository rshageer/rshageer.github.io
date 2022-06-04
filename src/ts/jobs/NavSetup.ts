import { JobInterface } from '../models';
import { FocusTrapper } from '../utils';

export class NavSetup implements JobInterface{
  private burgerBtn: HTMLButtonElement = document.querySelector('.menu > button');
  private closeBtn: HTMLButtonElement = document.querySelector('.menu > ul > button');
  private menuPane: HTMLUListElement = document.querySelector('.menu > ul');
  private body: HTMLElement = document.body;
  private trapper: FocusTrapper = new FocusTrapper(this.menuPane);

  execute(){
    this.burgerBtn.addEventListener('click', this.burgerEvent.bind(this));
    this.closeBtn.addEventListener('click', this.closeEvent.bind(this));
  }

  private burgerEvent(){
    if(this.menuPane.classList.contains('open')) return;
    this.menuPane.classList.add('open')
    this.body.classList.add('fixed-position');
    this.trapper.trap();
  }


  private closeEvent(){
    if(!this.menuPane.classList.contains('open')) return;
    this.menuPane.classList.remove('open')
    this.body.classList.remove('fixed-position');
    this.trapper.release();
  }
}
