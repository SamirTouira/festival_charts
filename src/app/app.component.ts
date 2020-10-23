import { Component } from '@angular/core';
import {movies} from './fake-data';
import { users } from './data-ter.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArchipelCharts';
  public movies = movies;
  public users = users;

}
