import Route from "./Route.js";

//Ici on définit les routes
export const allRoutes = [
    new Route ("/", "Accueil", "/pages/home.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Arcadia Zoo";