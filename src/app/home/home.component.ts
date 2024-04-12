import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../global.service';

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
  baseUrl: string = 'https://api.api-ninjas.com/v1/';
  apiKey: string = '0Y4MW7Ctv0gMpJAkSoGnM4oT9s59wvsnz0oYYt5C';

  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient,
    private http: HttpClient
  ) {
    this.displayWeather = globalService.displayWeather;
  }

  ngOnInit(): void {}

  fetchWeather(city: string) {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    console.log('Fetching weather data');

    this.http
      .get<any>(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
        headers,
      })
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
