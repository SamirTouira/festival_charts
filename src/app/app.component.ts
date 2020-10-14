import { Component, OnInit } from '@angular/core';
import {movies} from './fake-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ArchipelCharts';
  public movies = movies;
  ngOnInit(): void {
console.log(movies);
console.log("coucou");
  }

}
