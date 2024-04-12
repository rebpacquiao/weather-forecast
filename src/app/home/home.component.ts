import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../global.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  displayWeather: string;
  data: any[] = [];

  constructor(
    private globalService: GlobalService,
    private httpClient: HttpClient
  ) {
    this.displayWeather = globalService.displayWeather;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    console.log('Fetching data');
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}
