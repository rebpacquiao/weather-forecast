import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const headers = { 'X-Api-Key': 'yUrTF8zJH1UhAZGA2173Vw==d5zbkfZaOvmfAYjF' };
    return this.http.get(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
      headers,
    });
  }
}
