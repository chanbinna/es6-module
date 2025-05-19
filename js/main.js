import home from './pages/home.js';
import add from './pages/addrecipe.js';
import details from './pages/details.js';

const routes = {
    '/': home,
    '/add': add,
    '/details': details,
}


function render() {
    const path = location.hash.replace('#', '') || '/';
    const page = routes[path] || (() => '<h1>404 Not Found</h1>');
    app.innerHTML = page();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);