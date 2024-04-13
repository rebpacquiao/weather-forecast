import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  weatherForcastDescription: string;
  loginLabel: string;

  constructor(private auth: AuthService, private globalService: GlobalService) {
    this.weatherForcastDescription = globalService.description;
    this.loginLabel = globalService.login;
  }
  async handleAuth() {
    const response = await this.auth.signInWithGithub();

    console.log(response);
  }
}
