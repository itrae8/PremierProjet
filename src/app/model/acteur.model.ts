export interface Acteur extends ActeurFilm{
    age: number;
    nationalite : string;
}

export interface ActeurFilm {
    id: string;
    nom : string;
}