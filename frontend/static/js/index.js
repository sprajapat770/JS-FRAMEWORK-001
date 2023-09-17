import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => { 
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings }
    ];

    const potentialMatches = routes.map((route) =>{
        return {
            route: route,
            isMatch: location.pathname == route.path
        }
    });

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);

    if(!match){
        match = {
            isMatch: true,
            route: routes[0]
        }
    }
    
    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate',router);

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})