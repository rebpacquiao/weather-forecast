import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../global.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { WeatherData } from '../model/weather-data.model';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  displayWeather: string;
  weatherData: WeatherData[] = [];
  data: any[] = [];
  baseUrl: string = 'https://api.api-ninjas.com/v1/';
  apiKey: string = '0Y4MW7Ctv0gMpJAkSoGnM4oT9s59wvsnz0oYYt5C';

  displayedColumns: string[] = ['property', 'value'];
  dataSource: MatTableDataSource<any>;

  isFetching: boolean = false;

  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient,
    private http: HttpClient
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
      .get<WeatherData[]>(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
        {
          headers,
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.weatherData = data;
          this.dataSource = new MatTableDataSource<any>(
            Object.entries(this.weatherData)
          );
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
