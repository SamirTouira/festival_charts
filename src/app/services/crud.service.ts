import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {movies} from '../fake-data';
import * as data from '../data-ter.json';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database'



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // public users = data.users;
  movieRef: AngularFireObject<any>;
  private movieDoc: AngularFirestoreDocument<any>;
  moviesRef: AngularFirestoreCollection<any> = null;
  constructor(private db: AngularFirestore, private rm: AngularFireDatabase) {}

  addMovie(movie: any) {
    // this.movies.push({
    //   id: movie.id,
    //   title: movie.title,
    //   languages: movie.languages,
    //   producer: movie.producer
    // });
  }

  //Get Movies List
  getMoviesList(): Observable<any[]> {
    return this.db.collection('movies', ref => ref.where('storeConfig.status', '==', 'accepted')).valueChanges();
  }

  getMovie(id: string){
    this.movieDoc = this.db.doc(`movies/${id}`);
    const movie = this.movieDoc.valueChanges();
    return movie
  }

  getUser(id){
    // return this.users.find(u => id === u.id);
  }

  getIndex(id){
    // return this.movieDoc.findIndex(m => m.id === id);
  }

  createMovie(data) {
    return new Promise<any>((resolve, reject) =>{
      this.db
          .collection("movies")
          .add(data)
          .then(res => {}, err => reject(err));
  });
  }

  updateMovie(data){
    // const index = this.getIndex(movie.id);
    // this.movies.splice(index, 1, movie);
    // console.log(this.movies);
    // return this.movies;

    // this.movieDoc = this.db.doc(`movies/${id}`);
    // this.movieDoc.update(data);
    // return this.movieDoc;
console.log(data);
return this.db
       .collection("movies")
       .doc(data.id)
       .update(data);
  }

  deleteMovieService(id: string) {
    this.movieDoc = this.db.doc(`movies/${id}`);
    this.movieDoc.delete();
    // const index = this.getIndex(id);
    // this.movieDoc.splice(index, 1);
  }

}
