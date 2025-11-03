
// src/app/auth.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  base = 'http://localhost/skillshub'; // change to your PHP server URL
  http = inject(HttpClient);

  // login: returns { user, csrf_token } and browser saves session cookie automatically
  login(email: string, password: string) {
    const url = `${this.base}/login.php`;
    // WITH credentials: required so browser accepts Set-Cookie and sends it later
    return this.http.post<any>(url, { email, password }, { withCredentials: true });
  }

  saveCsrf(csrf: string | null) {
    if (csrf) localStorage.setItem('csrf_token', csrf);
  }

  async logout() {
    await firstValueFrom(this.http.post(`${this.base}/logout.php`, {}, { withCredentials: true }));
    localStorage.removeItem('csrf_token');
    localStorage.removeItem('user');
  }

  getCsrf() {
    return localStorage.getItem('csrf_token');
  }
}
