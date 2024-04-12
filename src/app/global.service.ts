import { Injectable } from '@angular/core';

const data = {
  GlobalService: {
    weatherForcast: 'Weather Forcast',
  },
  description:
    'Welcome to the weather forecast web application, Please login with your github to use the application and view the weather in your city.',
  login: {
    label: 'login',
  },
  logout: {
    label: 'logout',
  },
};

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public weatherForcast: string = data.GlobalService.weatherForcast;
  public description: string = data.description;
  public login: string = data.login.label;
  public logout: string = data.logout.label;
  constructor() {}
}
