import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ModuleContainer } from "../module-container/module-container";
import { Module } from '../module';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-module-grid',
  imports: [ModuleContainer],
  templateUrl: './module-grid.html',
  styleUrl: './module-grid.css',
})
export class ModuleGrid implements OnInit, OnDestroy {
  modules: Module[] = []
  loading = false;
  error: string | null = null;
  base = 'http://localhost/skillshub';

  subs = new Subscription();
  http = inject(HttpClient);
  ngOnInit(): void {
    this.loadModules();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadModules(): void {
    this.loading = true;
    this.error = null;

    const url = `${this.base}/test.php`;
    const s = this.http.get<any[]>(url).subscribe({
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
        this.error = err?.message ?? `Failed to load modules (status ${err?.status ?? '??'})`;
        this.modules = [];
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.subs.add(s);
  }
}
