import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  private movieAfd: AngularFirestoreDocument<any>;
  public movie: Observable<any>
  public movieId = this.actRoute.snapshot.paramMap.get('id');

  constructor(
    private db: AngularFirestore,
    private crudApi: CrudService,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const movieIdNumber = this.movieId;
    this.movie = this.crudApi.getMovie(movieIdNumber);
    console.log(this.movie);
    this.movie.subscribe(movie => console.log(movie));
  }

}
