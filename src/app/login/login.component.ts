import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WelcomeComponent } from '../welcome/welcome.component';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, WelcomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  weatherForcast: string;

  constructor(private globalService: GlobalService) {
    this.weatherForcast = globalService.weatherForcast;
  }
}
