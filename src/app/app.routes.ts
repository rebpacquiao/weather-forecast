import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WeatherComponent },
];
