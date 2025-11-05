
// src/app/auth.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  base = environment.apiUrl;
  http = inject(HttpClient);


  login(email: string, password: string) {
    return this.http.post<any>(`${this.base}/login.php`, { email, password }, { withCredentials: true });
  }

  saveSes(csrf: string | null, user: string | null) {
    if (csrf) localStorage.setItem('csrf_token', csrf);
    if (user) localStorage.setItem('user', user);
  }

  logout() {
    return this.http.post<any>(`${this.base}/logout.php`, {}, { withCredentials: true });
  }
}
