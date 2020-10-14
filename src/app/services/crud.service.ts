import { Injectable } from '@angular/core';
import {movies} from '../fake-data';
import { MovieListComponent } from '../movie-list/movie-list.component';
import {AppComponent} from '../app.component';
export interface Movie {
    $id: string;
    title: string;
    language: string;
    producer: string;
 }

@Injectable({
  providedIn: 'root'
})
export class CrudService {

public movies = movies;
  
  constructor() { }

  AddMovie(movie: Movie) {
    this.movies.push({
      id: movie.$id,
      title: movie.title,
      language: movie.language,
      producer: movie.producer
    })
  }

  GetMoviesList() {
    this.movies = movies;
    return this.movies;
  }  


}