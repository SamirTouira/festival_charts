import { Injectable } from '@angular/core';
import {movies} from '../fake-data';

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

// CRUD -> Create Movie
  addMovie(movie: Movie) {
    this.movies.push({
      id: movie.$id,
      title: movie.title,
      language: movie.language,
      producer: movie.producer
    })
  }

  //Get Movies List
  getMoviesList() {
    return this.movies;
  }
}