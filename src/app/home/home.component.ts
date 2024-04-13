import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../global.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { WeatherData } from '../model/weather-data.model';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from '../../environments/environment.development';

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
    MatTableModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  displayWeather: string;
  weatherData: WeatherData[] = [];
  data: any[] = [];
  apiKey: string = environment.API_KEY;
  baseUrl: string = environment.BASE_URL;
  units = 'metric';

  displayedColumns: string[] = ['property', 'value'];
  dataSource: MatTableDataSource<any>;

  isFetching: boolean = false;

  country: string = '';
  reelFeal: string = '';
  humidity: string = '';
  pressure: string = '';
  windDeg: string = '';
  windGust: string = '';
  windSpeed: string = '';
  weatherDate: string = '';
  temp: string = '';
  weatherDescription: string = '';

  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    this.displayWeather = globalService.displayWeather;
    this.dataSource = new MatTableDataSource<any>([]); // Initialize dataSource here
  }

  ngOnInit(): void {}

  fetchWeather(city: string) {
    if (this.isFetching) {
      console.log('Already fetching data, please wait...');
      return;
    }

    this.isFetching = true; // Set flag to true before fetching

    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    console.log('Fetching weather data');
    this.http
      .get<any>(
        `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=${this.units}`
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.isFetching = false;
          this.weatherData = data;
          this.dataSource = new MatTableDataSource<any>(
            Object.entries(this.weatherData)
          );

          if (data.name) {
            this.country = data.name;
            this.cdr.detectChanges();
          }

          if (data.timezone) {
            // Convert the timezone offset from seconds to milliseconds
            const timezoneOffsetInMs = data.timezone * 1000;

            const date = new Date();

            const utcTimeInMs =
              date.getTime() + date.getTimezoneOffset() * 60 * 1000;

            const localTimeInMs = utcTimeInMs + timezoneOffsetInMs;

            const localDate = new Date(localTimeInMs);

            this.weatherDate = new Intl.DateTimeFormat('en-US').format(
              localDate
            );

            this.cdr.detectChanges();
          }

          if (data && data.main) {
            console.log('Main weather data:', data.main);
            this.reelFeal = data.main.feels_like;
            this.humidity = data.main.humidity;
            this.pressure = data.main.pressure;
            this.temp = data.main.temp;
            this.cdr.detectChanges();
          }

          if (data.wind) {
            this.windDeg = data.wind.deg;
            this.windGust = data.wind.gust;
            this.windSpeed = data.wind.speed;
            this.cdr.detectChanges();
          }

          if (data.weather && data.weather.length > 0) {
            this.weatherDescription = data.weather[0].description;
            this.cdr.detectChanges();
          }
        },
        (error) => {
          console.error('Error:', error);
        },
        () => {
          this.isFetching = false; // Reset flag after request completes
        }
      );
  }
}
