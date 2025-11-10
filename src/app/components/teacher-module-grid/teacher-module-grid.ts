import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Module } from '../../interfaces/module';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-teacher-module-grid',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './teacher-module-grid.html',
  styleUrl: './teacher-module-grid.css',
})
export class TeacherModuleGrid implements OnInit, OnDestroy {
  public modules: Module[] = []
  public loading = false;
  private router = inject(Router);
  private base = environment.apiUrl;
  private snackBar = inject(MatSnackBar);
  private subs = new Subscription();
  private http = inject(HttpClient);
  private studentId = Number(localStorage.getItem('user')) ?? 0;
  ngOnInit(): void {
    this.loadModules();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadModules(): void {
    this.loading = true;
    const url = `${this.base}/teacher_module_grid.php?prof=${this.studentId}`;
    const s = this.http.get<any[]>(url, { withCredentials: true }).subscribe({
      next: data => {
        this.modules = (Array.isArray(data) ? data : []).map((m: any) => ({
          id: Number(m.id_module),
          title: m.title ?? '',
          description: m.description ?? "",
          author: m.author ?? "admin",
          size: m.size != null ? Number(m.size) : 0,
        }));
      },
      error: err => {
        if (err.status == 0) {
          this.snackBar.open("network error try again", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else if (err.status == 401) {
          this.snackBar.open("you are not authentificated", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        }
        else if (err.status == 403) {
          this.snackBar.open("the id was changed", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else if (err.status == 405) {
          this.snackBar.open("wrong method used", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else {
          this.snackBar.open("your request was unanswered", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        }
        this.router.navigate(["/login"]);
        this.loading = false;
        this.modules = [];
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.subs.add(s);
  }
}
