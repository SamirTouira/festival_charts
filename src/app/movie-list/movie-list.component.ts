import { Component, OnInit } from '@angular/core';
import { CrudService, Movie } from '../services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'ArchipelCharts';
  public movies: Observable<Movie[]>;
  public editForm: FormGroup;  // Define FormGroup to movie's edit form
  public movieId = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service

  constructor(
  private crudApi: CrudService,
  public toastr: ToastrService,
  private actRoute: ActivatedRoute,
  private fb: FormBuilder,
  private router: Router,
  ) {}
  ngOnInit(): void {
    // this.crudApi.getMoviesList().subscribe(moviesList => this.movies = moviesList);
    this.movies = this.crudApi.getMoviesList();
  }

  deleteMovie(movie){
    if (window.confirm('Are sure you want to delete this movie ?')) { // Asking from user before Deleting student data.
      this.crudApi.deleteMovieService(movie.id); // Using Delete movie API to delete movie.
       // Alert message will show up when movie successfully deleted.
      this.toastr.success(movie.title.toUpperCase() + ' successfully deleted!');
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
    const movieIdNumber = Number(this.movieId);
    const movie = this.crudApi.getMovie(movieIdNumber);
    this.editForm = this.fb.group({
      title: [movie.title, [Validators.required, Validators.minLength(2)]],
      languages: movie.languages,
      producer: this.fb.group({
        firstName: movie.producer.firstName,
        lastName: movie.producer.lastName
      })
    });
    // window.location.replace('edit-movie/' + this.movieId);

}

}
