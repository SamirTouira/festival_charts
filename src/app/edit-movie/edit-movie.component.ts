import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
// ActivatedRoue is used to get the current associated components information.
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  public editForm: FormGroup;  // Define FormGroup to movie's edit form
  public movieId = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service

  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's information
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }
  ngOnInit() {
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

    this.actRoute.params.subscribe((params: Params) => {
      this.movieId = params['id'];
    });
  }
  // Accessing form control using getters
  get title() {
    return this.editForm.get('title');
  }
  get languages() {
    return this.editForm.get('languages');
  }
  get producer() {
    return this.editForm.get('producer');
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }
  // Below methods fire when somebody click on submit button

  resetForm() {
    this.editForm.reset();
  }
  edit() {
    const movieIdNumber = Number(this.movieId);
    this.crudApi.updateMovie({...this.editForm.value, id: movieIdNumber});
    this.toastr.success(this.editForm.controls['title'].value.toUpperCase() + ' successfully updated!');
    this.resetForm();
  }
}
