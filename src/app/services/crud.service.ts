import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database'



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  movieRef: AngularFireObject<any>;
  private movieDoc: AngularFirestoreDocument<any>;
  moviesRef: AngularFirestoreCollection<any> = null;
  constructor(private db: AngularFirestore, private rm: AngularFireDatabase) {}

  // Get Movies List
  getMoviesList(): Observable<any[]> {
    return this.db.collection('movies', ref => ref.where('storeConfig.status', '==', 'accepted')).valueChanges();
  }

 // Get a Movie
  getMovie(id: string){
    this.movieDoc = this.db.doc(`movies/${id}`);
    const movie = this.movieDoc.valueChanges();
    return movie
  }

  // Create a Movie
  createMovie(data) {
    return new Promise<any>((resolve, reject) =>{
      this.db
          .collection("movies")
          .add(data)
          .then(res => {}, err => reject(err));
  });
  }

  updateMovie(data){
    console.log(data);
    return this.db
       .collection("movies")
       .doc(data.id)
       .update(data);
  }

  deleteMovieService(id: string) {
    this.movieDoc = this.db.doc(`movies/${id}`);
    this.movieDoc.delete();
  }
}
