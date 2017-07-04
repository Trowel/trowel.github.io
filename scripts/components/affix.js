class Affix {
  constructor() {
    this.contentWrapper = document.getElementById('doc-content');

    if (!this.contentWrapper) return;
    if (!this.contentWrapper.getAttribute('data-affix')) return;

    return this.print();
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
      anchor.setAttribute('data-anchor', '');
      anchor.setAttribute('href', `#${heading.id}`);

      return nav.append(anchor);
    });

    return this.contentWrapper.before(nav);
  }
}

export default Affix;