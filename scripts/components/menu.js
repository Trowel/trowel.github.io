class Menus {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new Menu(element);
    })
  }
}

class Menu {
  constructor(element) {
    this.element = element;
    this.nav = element.querySelector('[data-menu="nav"]');
    this.navToggle = element.querySelector('[data-menu="toggle"]');
    this.backdrop = element.querySelector('[data-menu="backdrop"]');

    this.movingDom = [this.nav, this.backdrop];
    this.triggerDom = [this.navToggle, this.backdrop];

    return this.listener();
  }

  toggle() {
    this.movingDom.map(navPart => navPart.classList.toggle('is-in'));
  }

  listener() {
    return this.triggerDom.map(navPart => navPart.addEventListener('click', this.toggle.bind(this)));
  }
}

export default Menus;