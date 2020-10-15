import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {movies} from '../fake-data';

export interface Movie {
    id: string;
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

  addMovie(movie: Movie) {
    this.movies.push({
      id: movie.id,
      title: movie.title,
      language: movie.language,
      producer: movie.producer
    });
  }

  //Get Movies List
  getMoviesList(): Observable<Movie[]> {
    return of(movies);
  }

  getMovie(id: string){
    return this.movies.find(m => id === m.id);
  }

    // Update Student Object
    // updateMovie(movie: Movie) {
    //   this.movies.update({
    //     id: movie.id,
    //     title: movie.title,
    //     language: movie.language,
    //     producer: movie.producer,
    //   });
    // }
}
