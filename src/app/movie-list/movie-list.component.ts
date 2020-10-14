import { Component, OnInit } from '@angular/core';
import {movies} from '../fake-data';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'ArchipelCharts';
  // public movies = movies;
  public movies;

  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
console.log(movies);
    this.movies = this.crudService.getMoviesList();

  }

}
