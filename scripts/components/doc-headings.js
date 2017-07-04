import anchorJS from '../../node_modules/anchor-js/anchor'

export default class DocHeadings {
  constructor() {
    const anchors = new anchorJS();
    anchors.options = {
      placement: 'left',
    }
    anchors.add('[data-headinganchor="true"] h1, [data-headinganchor="true"] h2, [data-headinganchor="true"] h3, [data-headinganchor="true"] h4, [data-headinganchor="true"] h5, [data-headinganchor="true"] h6');
    return anchors
  }
}
