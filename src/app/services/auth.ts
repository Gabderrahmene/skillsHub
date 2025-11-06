
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
  register(nom: string, prenom: string, niveau: string, email: string, password: string,) {
    return this.http.post<any>(`${this.base}/register.php`, { nom, prenom, email, password, niveau }, { withCredentials: true });
  }
  saveSes(user: string | null) {
    if (user) localStorage.setItem('user', user);
  }

  logout() {
    return this.http.post<any>(`${this.base}/logout.php`, {}, { withCredentials: true });
  }
}
