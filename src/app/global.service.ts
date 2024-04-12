import { Injectable } from '@angular/core';

const data = {
  GlobalService: {
    weatherForcast: 'Weather Forcast',
  },
  description:
    'Welcome to the weather forecast web application, Please login with your github to use the application and view the weather in your city.',
  button: {
    label: 'login',
  },
};

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public weatherForcast: string = data.GlobalService.weatherForcast;
  constructor() {}
}
