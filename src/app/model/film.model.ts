import { ActeurFilm } from "./acteur.model";

export interface Film {
    id: string;
    nom: string;
    acteurs: string[];
}

export interface FilmListe {
    id: string;
    nom: string;
    acteurs: ActeurFilm[];
}