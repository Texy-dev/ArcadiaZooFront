import Route from "./Route.js";

//Ici on définit les routes
export const allRoutes = [
    new Route ("/", "Accueil", "/pages/home.html"),
    new Route ("/services", "Nos services", "/pages/services.html"),
    new Route ("/habitats", "Nos habitats et nos animaux", "/pages/habitats.html"),
    new Route ("/savane", "La savane", "/pages/savane.html"),
    new Route ("/jungle", "La jungle", "/pages/jungle.html"),
    new Route ("/marais", "Le marais", "/pages/marais.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Arcadia Zoo";