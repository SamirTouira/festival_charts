import { Component, Input, OnInit } from '@angular/core';
import { CrudService, Movie } from '../services/crud.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'ArchipelCharts';
  public movies: Movie[];

  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
    this.crudService.getMoviesList().subscribe(moviesList => this.movies = moviesList);
  }
}
