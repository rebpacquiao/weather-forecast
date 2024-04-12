import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalService } from './global.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  weatherForcast: string;
  logoutLabel: string;

  constructor(private globalService: GlobalService) {
    this.weatherForcast = globalService.weatherForcast;
    this.logoutLabel = globalService.logout;
  }
}
