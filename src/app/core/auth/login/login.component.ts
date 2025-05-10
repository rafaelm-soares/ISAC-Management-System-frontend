import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.signIn(this.email, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['home']);
        } else {
          alert('Login failed');
        }
      },
      error => {
        console.error('Login error', error);
        alert('An error occurred during login');
      }
    );
  }
}
