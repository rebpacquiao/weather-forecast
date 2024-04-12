import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, WelcomeComponent],
  imports: [BrowserModule, CommonModule],
  exports: [LoginComponent, WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
