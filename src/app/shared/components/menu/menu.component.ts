import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  userName: string | null = null;
  userRole: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserName().subscribe(name => {
      this.userName = name;
    });
    this.authService.getUserRole().subscribe(role => {
      this.userRole = role;
    });
  }

  logout(event: Event): void {
    event.preventDefault();

    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Logout failed', err);
      }
    });
  }

  customAction(event: Event): void {
    event.preventDefault();
  }
}
