
export class FocusTrapper {
  private element: HTMLElement;
  private FOCUS_SELECTORS: string = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  private focusableElements: NodeList;

  constructor(element: HTMLElement){
    this.element = element;
    this.focusableElements = this.element.querySelectorAll(this.FOCUS_SELECTORS)
  }

  trap(){
    this.element.addEventListener('keydown', this.trapListener.bind(this));
  }

  release(){
    this.element.removeEventListener('keydown', this.trapListener.bind(this));
  }

  private trapListener(e: KeyboardEvent){
    const firstEl = this.focusableElements[0] as HTMLElement;
    const lastEl = this.focusableElements[this.focusableElements.length - 1] as HTMLElement;
    const KEYCODE_TAB = 9;
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB)

    if(!isTabPressed) return;

    if(e.shiftKey) {
      if(document.activeElement === firstEl){
        lastEl.focus();
        e.preventDefault()
      }
    } else {
      if(document.activeElement === lastEl){
        firstEl.focus();
        e.preventDefault();
      }
    }
  }
}
