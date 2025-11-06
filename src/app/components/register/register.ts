import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ErrorStateMatcher, MatOption, MatOptgroup } from '@angular/material/core';
import {MatSelect } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatInputModule, MatSelect, MatOption, MatOptgroup, MatButtonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
 registerForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    niveau: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });
   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}