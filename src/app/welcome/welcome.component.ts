import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  weatherForcastDescription: string;
  loginLabel: string;

  constructor(
    private globalService: GlobalService,
    private cdr: ChangeDetectorRef
  ) {
    this.weatherForcastDescription = globalService.description;
    this.loginLabel = globalService.login;
    this.cdr.detectChanges();
  }
}
