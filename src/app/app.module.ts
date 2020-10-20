import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'; // à laisser pour le moment
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store'; // à laisser pour le moment
import { environment } from '../environments/environment'; // à laisser pour le moment
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrucalaconComponent } from './trucalacon/trucalacon.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit-movie', pathMatch: 'full' },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'edit-movie/:id', component: EditMovieComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EditMovieComponent,
    MovieListComponent,
    AddMovieComponent,
    TrucalaconComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    FlexLayoutModule,
    // environment.production ? [] : AkitaNgDevtools.forRoot(),
    // AkitaNgRouterStoreModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]})

  export class AppModule { }
