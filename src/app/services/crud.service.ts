import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {movies} from '../fake-data';
import * as data from '../data-ter.json';


export interface Movie {
    id: number;
    title: string;
    languages: string;
    producer: {
      firstName: string,
      lastName: string
    };
 }

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public movies = data.movies;
  public users = data.users;
  constructor() { }

  addMovie(movie: Movie) {
    this.movies.push({
      id: movie.id,
      title: movie.title,
      languages: movie.languages,
      producer: movie.producer
    });
  }

  //Get Movies List
  getMoviesList(): Observable<Movie[]> {
    return of(this.movies);
  }

  // getUsers():Observable<Movie[]>{
  //   return of (this.users);
  // }

  getMovie(id: number){
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
