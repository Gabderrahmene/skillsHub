import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Module } from '../../interfaces/module';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-all-modules-page',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './all-modules-page.html',
  styleUrl: './all-modules-page.css',
})
export class AllModulesPage implements OnInit, OnDestroy {
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
    const url = `${this.base}/module_page.php?student=${this.studentId}`;
    const s = this.http.get<any[]>(url, { withCredentials: true }).subscribe({
      next: data => {
        this.modules = (Array.isArray(data) ? data : []).map((m: any) => ({
          id: Number(m.id_module),
          title: m.title ?? '',
          description: m.description ?? "",
          author: m.author ?? "admin",
          size: m.size != null ? Number(m.size) : 1,
          joined: m.joined != null ? Boolean(m.joined) : false,
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
  joinModule(id_module: number): void {
    {
      const url = `${this.base}/module_page.php`;
      let id_student = this.studentId;
      const s = this.http.post<any[]>(`${this.base}/join_module.php`, { id_module, id_student }, { withCredentials: true }).subscribe({
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
          this.router.navigate(["login"]);
        },
        complete: () => {
          this.snackBar.open("module joined", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['success-snackbar'],
            duration: 3000,
          });
          this.router.navigate(["/student/homescreen"]);
        }
      });

      this.subs.add(s);
    }
  }
}