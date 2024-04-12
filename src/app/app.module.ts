import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common'; // Import CommonModule if you haven't already
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    CommonModule, // Ensure CommonModule is imported if you haven't already
    MatSlideToggleModule, // Include MatSlideToggleModule here
  ],
  exports: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
