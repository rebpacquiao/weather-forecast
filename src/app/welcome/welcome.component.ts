import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

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

  constructor(private globalService: GlobalService) {
    this.weatherForcastDescription = globalService.description;
    this.loginLabel = globalService.login;
  }
}
