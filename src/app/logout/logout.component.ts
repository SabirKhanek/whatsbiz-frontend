import { AuthService } from './../services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService: AuthService) {
    this.authService.logOut()
  }
}
