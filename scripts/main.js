import Menus from './components/menu';
import Affix from './components/affix';
import TrowelBreadcrumbs from '../node_modules/trowel-breadcrumbs/src/javascript/breadcrumbs';
import TrowelAlerts from '../node_modules/trowel-alerts/src/javascript/alerts';
import TrowelDrops from '../node_modules/trowel-drops/src/javascript/drops';
import TrowelCollapses from '../node_modules/trowel-collapses/src/javascript/collapses';
import TrowelModals from '../node_modules/trowel-modals/src/javascript/modals';

const menus = new Menus(document.querySelectorAll('[data-flag="menu"]'));
const affix = new Affix();

// Trowel components
const breadcrumbs = new TrowelBreadcrumbs(document.querySelectorAll('[data-flag="breadcrumb"]'));
const alerts = new TrowelAlerts(document.querySelectorAll('.alert'));
const dropsTrigger = new TrowelDrops(document.querySelectorAll('[data-drop="trigger"]'));
const collapses = new TrowelCollapses(document.querySelectorAll('[data-flag="collapse"]'));
const modals = new TrowelModals(document.querySelectorAll('[data-flag="modal"]'));
