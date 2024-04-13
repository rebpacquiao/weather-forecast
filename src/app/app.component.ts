// app.component.ts
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalService } from './global.service';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherForcast: string;
  logoutLabel: string;
  userData = signal({});
  userAvatar = signal({});
  gitHubLink = signal({});

  constructor(
    private globalService: GlobalService,
    private auth: AuthService,
    private router: Router
  ) {
    this.weatherForcast = globalService.weatherForcast;
    this.logoutLabel = globalService.logout;
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe((user) => {
      if (user && user.user_metadata) {
        this.userData = user.user_metadata['full_name'];
        this.userAvatar = user.user_metadata['avatar_url'];
        this.gitHubLink = user.user_metadata['user_name'];
        console.log(this.userData, 'full name');
      }
    });
  }
}
