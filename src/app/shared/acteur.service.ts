import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acteur, ActeurFilm } from '../model/acteur.model';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {

  constructor(private httpClient: HttpClient) { }

  getActeurs(): Observable<ActeurFilm[]> {
    return this.httpClient.get<ActeurFilm[]>(`${environment.urlBack}/acteurs`);
  }

  getActeur(id: string): Observable<Acteur> {
    return this.httpClient.get<Acteur>(`${environment.urlBack}/acteur/${id}`);
  }

  patchActeur(acteur: Acteur): Observable<Acteur>{
    return this.httpClient.patch<Acteur>(`${environment.urlBack}/acteur`, acteur);
  }
}
