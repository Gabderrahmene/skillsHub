import { Injectable, signal } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class Sidenav {
  private _sidenav = signal<MatSidenav | null>(null);

  setSidenav(sidenav: MatSidenav | null) {
    this._sidenav.set(sidenav);
  }

  toggle(): Promise<MatDrawerToggleResult> | void {
    const s = this._sidenav();
    return s ? s.toggle() : undefined;
  }

  close(): Promise<MatDrawerToggleResult> | void {
    const s = this._sidenav();
    return s ? s.close() : undefined;
  }
}

