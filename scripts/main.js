import Menus from './components/menu';
import Affix from './components/affix';
import TrowelBreadcrumbs from '../node_modules/trowel-breadcrumbs/src/javascript/breadcrumbs';

const menus = new Menus(document.querySelectorAll('[data-flag="menu"]'));
const affix = new Affix();
const breadcrumbs = new TrowelBreadcrumbs(document.querySelectorAll('[data-flag="breadcrumb"]'));