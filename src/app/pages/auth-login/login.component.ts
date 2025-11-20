// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Username dan password harus diisi!';
      return;
    }

    const success = this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/pegawai']);
    } else {
      this.errorMessage = 'Login gagal! Periksa username dan password.';
    }
  }

  quickLogin(role: 'admin' | 'user') {
    this.username = role;
    this.password = 'password';
    this.login();
  }
}
