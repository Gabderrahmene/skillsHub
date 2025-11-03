import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  is_auth = null;
  auth = inject(AuthService);
  login_now() {
    this.auth.login(this.loginForm.value.username ?? "", this.loginForm.value.password ?? "").subscribe({
      next: res => {

        this.auth.saveCsrf(res?.csrf_token ?? null);

      },
      error: err => {
        console.error('login failed', err);

      }
    });
  }
}
