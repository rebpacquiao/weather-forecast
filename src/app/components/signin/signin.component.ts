import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  constructor(private auth: AuthService) {}
  async handleAuth() {
    const response = await this.auth.signInWithGithub();

    console.log(response);
  }
}
