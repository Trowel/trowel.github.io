import Menus from './components/menu';
import Affix from './components/affix';
import TrowelBreadcrumbs from '../node_modules/trowel-breadcrumbs/src/javascript/breadcrumbs';
import TrowelAlerts from '../node_modules/trowel-alerts/src/javascript/alerts';

const menus = new Menus(document.querySelectorAll('[data-flag="menu"]'));
const affix = new Affix();

// Trowel components
const breadcrumbs = new TrowelBreadcrumbs(document.querySelectorAll('[data-flag="breadcrumb"]'));
const alerts = new TrowelAlerts(document.querySelectorAll('.alert'));