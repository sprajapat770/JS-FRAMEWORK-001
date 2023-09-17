const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => { 
    const routes = [
        { path: "/", view: () => { console.log("Viewing Dashboard")} },
        { path: "/posts", view: () => { console.log("Viewing Posts")} },
        { path: "/settings", view: () => { console.log("Viewing Settings")} }
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

    console.log(match.route.view());
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