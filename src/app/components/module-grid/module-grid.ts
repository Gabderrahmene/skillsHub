import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ModuleContainer } from "../module-container/module-container";
import { Module } from '../../interfaces/module';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-module-grid',
  imports: [ModuleContainer],
  templateUrl: './module-grid.html',
  styleUrl: './module-grid.css',
})
export class ModuleGrid implements OnInit, OnDestroy {
  public modules: Module[] = []
  public loading = false;
  private router = inject(Router);
  private base = environment.apiUrl;
  private snackBar = inject(MatSnackBar);
  private subs = new Subscription();
  private http = inject(HttpClient);
  private studentId = localStorage.getItem('user');
  ngOnInit(): void {
    this.loadModules();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadModules(): void {
    this.loading = true;
    const url = `${this.base}/module_grid.php?student=${this.studentId}`;
    const s = this.http.get<any[]>(url, { withCredentials: true }).subscribe({
      next: data => {
        this.modules = (Array.isArray(data) ? data : []).map((m: any) => ({
          id: m.id_module,
          title: m.title ?? '',
          description: m.description ?? "",
          size: m.size != null ? Number(m.size) : 10,
          progress: m.progress != null ? Number(m.progress) : 0,
        }));
      },
      error: err => {
        if (err.status == 401) {
          this.snackBar.open("you are not authentificated", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        }
        else if (err.status == 403) {
          this.snackBar.open("the id cookie was changed", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        } else {
          this.snackBar.open("man idk", "ok", {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        }
        this.router.navigate(["login"]);
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
