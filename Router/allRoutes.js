import Route from "./Route.js";

//Ici on définit les routes
export const allRoutes = [
    new Route ("/", "Accueil", "/pages/home.html"),
    new Route ("/services", "Nos services", "/pages/services.html"),
    new Route ("/habitats", "Nos habitats et nos animaux", "/pages/animaux/habitats.html"),
    new Route ("/savane", "La savane", "/pages/animaux/savane.html"),
    new Route ("/jungle", "La jungle", "/pages/animaux/jungle.html"),
    new Route ("/marais", "Le marais", "/pages/animaux/marais.html"),
    new Route ("/animaux", "Nos animaux", "/pages/animaux/animaux.html"),
    new Route ("/account", "Mon compte", "/pages/auth/account.html"),
    new Route ("/signin", "Connexion", "/pages/auth/signin.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Arcadia Zoo";