import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CrudService, Movie } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { movies } from '../fake-data';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to movie's edit form
  public movieId = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
  public movies = movies;

  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }
  ngOnInit() {
    // this.updateMovieData();   // Call updateMovieData() as soon as the component is ready
    const movie = this.crudApi.getMovie(this.movieId);
    this.editForm = this.fb.group({
      title: movie.title,
      language: movie.language,
      producer: movie.producer
    });

    // this.editForm = this.fb.group({
    //   title = this.movieId
    // });
  }
  // Accessing form control using getters
  get title() {
    return this.editForm.get('title');
  }
  get language() {
    return this.editForm.get('language');
  }
  get producer() {
    return this.editForm.get('producer');
  }
  // Contains Reactive Form logic

  // Go back to previous component
  goBack() {
    this.location.back();
  }
  // Below methods fire when somebody click on submit button

  edit(data) {
  // const movie = this.crudApi.getMovie(this.movieId);
  // this.crudApi.getMovie(this.movieId).valueChanges().subscribe(data => {
  return this.movies.map(movie => {
    if (movie.id === this.movieId){
      const newMovie = this.editForm.patchValue({
        id: movie.id,
        title: data.title, language: data.language, producer: data.producer
      });
      console.log(this.editForm);
      /* tslint:disable:no-string-literal */
      this.toastr.success(this.editForm.controls['title'].value + ' updated successfully');
      /* tslint:enable:no-string-literal */
      return newMovie;
    }
  });

  // });
  // this.editForm.setValue(data.title);

  }
}
