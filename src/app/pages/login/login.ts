import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

interface user {
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {

  errorMessage: string = '';
  listRole: string[];
  selectedRole: string;
  user: user = {
    username: '',
    password: '',
    role: ''
  };

  constructor(private router: Router) {
    this.listRole = ['admin', 'editor', 'viewer'];
    this.selectedRole = this.listRole[0];
  }

  login() {

    if (!this.user.username || !this.user.password) {
      this.errorMessage = 'Username and Password are required!';
      return;
    }

    this.router.navigate(['/home']);

  }

  quickLogin(role: string) {
    this.user.role = role; // Set the role in the user object
    this.user.username = 'quickuser'; // Example quick username
    this.user.password = 'quickpass'; // Example quick password
    this.login(); // Call the login method
  }

}