import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  private router = inject(Router);
  private auth = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  login_now() {
    this.auth.login(this.loginForm.value.email ?? "", this.loginForm.value.password ?? "").subscribe({
      next: res => {

        this.auth.saveSes(res?.csrf_token ?? null, res?.user ?? null);
      },
      error: err => {
        if (err.status == 400) {
          this.snackBar.open("email and password required", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else if (err.status == 401) {
          this.snackBar.open("incorrect email or password", "ok", {
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
        this.router.navigate(["homescreen"]);
      },
    });
  }
}
