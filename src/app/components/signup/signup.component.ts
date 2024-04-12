import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  async handleAuth() {
    const response = await this.authService.signInWithGithub();
    console.log('Auth response:', response);
  }
}
