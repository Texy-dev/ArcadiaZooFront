import Route from "./Route.js";

//Ici on définit les routes
export const allRoutes = [
    new Route ("/", "Accueil", "/pages/home.html"),
    new Route ("/services", "Nos services", "/pages/services.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Arcadia Zoo";