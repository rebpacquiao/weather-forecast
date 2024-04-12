import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  weatherForcastDescription: string;
  loginLabel: string;

  constructor(
    private globalService: GlobalService,
    private authService: AuthService
  ) {
    this.weatherForcastDescription = globalService.description;
    this.loginLabel = globalService.login;
  }

  async handleAuth() {
    const response = await this.authService.signInWithGithub();
    console.log('Auth response:', response);
  }
}
