import { Component, signal } from '@angular/core';
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
  styleUrl: './app.component.scss',
})
export class AppComponent {
  weatherForcast: string;
  logoutLabel: string;
  userData = signal({});

  constructor(
    private globalService: GlobalService,
    private auth: AuthService,
    private router: Router
  ) {
    this.weatherForcast = globalService.weatherForcast;
    this.logoutLabel = globalService.logout;
    this.auth.currentUser.subscribe((user) => {
      //this.userData.set(user);
      this.userData.set(user?.user_metadata?.['full_name']);
      console.log(this.userData(), 'full name');
    });
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }
}
