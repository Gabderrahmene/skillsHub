import { Component, inject } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-optionlist',
  imports: [MatIconModule, RouterModule, RouterLink],
  templateUrl: './optionlist.html',
  styleUrl: './optionlist.css',
})
export class Optionlist {
  private snackBar = inject(MatSnackBar);
  private auth = inject(AuthService);
  private router = inject(Router);;

  logout_now() {
    this.auth.logout().subscribe({
      error: () => {
        this.snackBar.open("logout failed", "ok", {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
          duration: 3000,
        });

      },
      complete: () => {
        localStorage.removeItem('csrf_token');
        localStorage.removeItem('user');
        this.snackBar.open("logout successful", "ok", {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
          duration: 3000,
        });
        this.router.navigate(["login"]);
      },
    });
  }
}
