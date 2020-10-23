import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';



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
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { GraphicUsersComponent } from './graphic-users/graphic-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'edit-movie/:id', component: EditMovieComponent },
  { path: 'apex-charts', component: ApexChartsComponent },
  { path: 'graphic-users', component: GraphicUsersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EditMovieComponent,
    MovieListComponent,
    AddMovieComponent,
    TrucalaconComponent,
    SidenavComponent,
    ApexChartsComponent,
    GraphicUsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    NgApexchartsModule,
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
