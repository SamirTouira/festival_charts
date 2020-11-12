import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  public moviesForm: FormGroup;  // Define FormGroup to movie's form

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message

  ) {
    this.moviesForm = this.fb.group({
      // title: ['', [Validators.required, Validators.minLength(2)]],
      title: this.fb.group({
        international: new FormControl(''),
        original: new FormControl('')
      }),
      synopsis: new FormControl(''),
      // languages: new FormControl(''),
      directors: this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl('')
      }),
      storeConfig: this.fb.group({
        status: ''
      })
    });
  }

  // Accessing form control using getters
  get title() {
    return this.moviesForm.get('title');
  }
  get synopsis(){
    return this.moviesForm.get('synopsis');
  }
  get directors(){
    return this.moviesForm.get('directors');
  }

  get storeConfig(){
    return this.moviesForm.get('storeConfig');
  }


  resetForm(){
    this.moviesForm.reset();
  }
  submitMovieData(): void {
     // Submit movie data using CRUD API
    this.crudApi.createMovie(this.moviesForm.value);
     // Show success message when data is successfully submited
     /* tslint:disable:no-string-literal */
    //  console.log(this.moviesForm.controls['title']);
    this.toastr.success(this.moviesForm.controls['title'].value.international + ' successfully added!');
    /* tslint:enable:no-string-literal */
     // Reset form when clicked on reset button
    this.resetForm();
   }

}
