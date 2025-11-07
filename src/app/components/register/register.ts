
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption, MatOptgroup } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelect, MatOption, MatOptgroup, MatButtonModule, MatIconModule, ReactiveFormsModule],
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
  private router = inject(Router);
  private auth = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  switch() {
    this.router.navigate(["/login"]);
  }
  register_now() {
    this.auth.register(this.registerForm.value.nom ?? "", this.registerForm.value.prenom ?? "", this.registerForm.value.niveau ?? "", this.registerForm.value.email ?? "", this.registerForm.value.password ?? "").subscribe({
      error: err => {
        if (err.status == 409) {
          this.snackBar.open("email already in use", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else if (err.status == 400) {
          this.snackBar.open("all informations required", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else {
          this.snackBar.open("man something wrong and i have no idea what it is", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        }


      },
      complete: () => {
        this.snackBar.open("registering successful", "ok", {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
          duration: 3000,
        });
        this.router.navigate(["/login"]);
      },
    });
  }
}