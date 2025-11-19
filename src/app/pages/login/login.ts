import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
  listRole = ['Admin', 'Editor', 'Viewer'];
  errorMessage: string = '';
  selectedRole: string = this.listRole[0];
  user: user = {
    username: '',
    password: '',
    role: ''
  };

  login() {

    if (!this.user.username || !this.user.password) {
      this.errorMessage = 'Username and Password are required!';
      return;
    }

  }

  quickLogin(role: string) {

  }

}
