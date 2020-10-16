import { Component, OnInit } from '@angular/core';
import { CrudService, Movie } from '../services/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'ArchipelCharts';
  public movies: Movie[];

  constructor(
  private crudApi: CrudService,
  public toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.crudApi.getMoviesList().subscribe(moviesList => this.movies = moviesList);
  }

  deleteMovie(movie){
    if (window.confirm('Are sure you want to delete this movie ?')) { // Asking from user before Deleting student data.
      this.crudApi.deleteMovieService(movie.id); // Using Delete movie API to delete movie.
      this.toastr.success(movie.title + ' successfully deleted!'); // Alert message will show up when movie successfully deleted.
    }
  }
}
