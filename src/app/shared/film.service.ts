import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${environment.urlBack}/films`).pipe(
       // Renvoie la valeur émise après 1s de délai
       delay(1000),
    );
  }

  postFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(`${environment.urlBack}/films`, film);
  }
}
