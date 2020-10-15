import { Component } from '@angular/core';
import {movies} from './fake-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArchipelCharts';
  public movies = movies;

}
