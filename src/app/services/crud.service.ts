import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {movies} from '../fake-data';
import { Location } from '@angular/common';

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
  constructor(private location: Location) { }

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

  getIndex(id){
    return this.movies.findIndex(m => m.id === id);
  }

  updateMovie(movie: Movie){
    const index = this.getIndex(movie.id);
    this.movies.splice(index, 1, movie);
    console.log(this.movies);
    return this.movies;
  }

  deleteMovieService(id) {
    const index = this.getIndex(id);
    this.movies.splice(index, 1);
  }

}
