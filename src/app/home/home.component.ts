import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../global.service';
import { environment } from '../environments';

import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  displayWeather: string;
  weatherData: any[] = [];
  data: any[] = [];
  city = 'london';

  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient,
    private http: HttpClient
  ) {
    this.displayWeather = globalService.displayWeather;
  }

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather() {
    const headers = new HttpHeaders({
      'X-Api-Key': environment.apiKey,
    });

    this.http
      .get<any>(`${environment.baseUrl}weather?city=${this.city}`, { headers })
      .subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
