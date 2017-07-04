class Affix {
  constructor() {
    this.contentWrapper = document.getElementById('doc-content');

    if (!this.contentWrapper) return;
    if (!this.contentWrapper.getAttribute('data-affix')) return;

    this.print();
    return this.listener();
  }

  get headings() {
    return [].slice.call(this.contentWrapper.querySelectorAll('h2'));
  }

  get anchors() {
    return [].slice.call(document.querySelectorAll('#affix a'));
  }

  print() {
    const nav = document.createElement("nav");
    nav.classList.add('affix');
    nav.id = 'affix';

    this.headings.map(heading => {
      const anchor = document.createElement("a");
      anchor.innerText = heading.innerText;
      anchor.setAttribute('data-anchor', heading.id);

      return nav.append(anchor);
    });

    return this.contentWrapper.before(nav);
  }

  goTo(event) {
    const target = document.getElementById(event.target.getAttribute('data-anchor'));
    const header = document.getElementById('header');
    const subHeader = document.getElementById('doc-subheader');
    const docContent = document.getElementById('doc-content');
    let scrollTop = target.offsetTop;
    if (docContent.firstElementChild == target) scrollTop -= header.offsetHeight;

    return document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
  }

  listener() {
    this.anchors.map(anchor => anchor.addEventListener('click', this.goTo.bind(this)));
  }
}

export default Affix;