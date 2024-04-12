import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: LoginComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, WeatherComponent],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
