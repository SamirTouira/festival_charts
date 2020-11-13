import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'ArchipelCharts';
  public movies: Observable<any>;
  public editForm: FormGroup;  // Define FormGroup to movie's edit form
  public movieId = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service

  constructor(
  private crudApi: CrudService,
  public toastr: ToastrService,
  private actRoute: ActivatedRoute,
  private fb: FormBuilder,
  private router: Router,
  private db: AngularFirestore,
  private database: AngularFireDatabase
  ) {}
  ngOnInit(): void {
    // this.crudApi.getMoviesList().subscribe(moviesList => this.movies = moviesList);
    this.movies = this.crudApi.getMoviesList();
  }

  deleteMovie(movie){
    if (window.confirm('Are sure you want to delete this movie ?')) { // Asking from user before Deleting student data.
      this.crudApi.deleteMovieService(movie.id); // Using Delete movie API to delete movie.
       // Alert message will show up when movie successfully deleted.
      this.toastr.success(movie.title.international.toUpperCase() + ' successfully deleted!');
    }
  }

  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 2);
    const movieIdNumber = String(this.movieId);
    const movie = this.crudApi.getMovie(movieIdNumber);
    this.editForm = this.fb.group({
      title: this.fb.group({
        international: new FormControl(''),
        original: new FormControl('')
      }),
      synopsis: new FormControl(''),
      directors: this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl('')
      }),
      storeConfig: this.fb.group({
        status: ''
      })
    });
  }
}
