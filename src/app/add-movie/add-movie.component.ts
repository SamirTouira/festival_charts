import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public moviesForm: FormGroup;  // Define FormGroup to movie's form

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message

  ) { 
    this.moviesForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      language: new FormControl(''),
      producer: new FormControl('')
      
    })  
  }

  ngOnInit(): void {
    // this.crudApi.GetMoviesList();  // Call GetMoviesList() before main form is being called
    // this.movieForm();              // Call movie form when component is ready
    console.log("kikou");
  }

 movieForm() {

  }
  // Accessing form control using getters
  get title() {
    return this.moviesForm.get('title');
  }
  get language() {
    return this.moviesForm.get('language');
  }  
  get producer() {
    return this.moviesForm.get('producer');
  }
  resetForm() {
    this.moviesForm.reset();
  }  
  submitMovieData() {
     // Submit movie data using CRUD API
    this.crudApi.addMovie(this.moviesForm.value);
     // Show success message when data is successfully submited
    this.toastr.success(this.moviesForm.controls['title'].value + ' successfully added!');
     // Reset form when clicked on reset button
    this.resetForm();
   };

}
