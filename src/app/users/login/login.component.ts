import { Component } from '@angular/core';
import { Login } from './login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model = new Login('', '');

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.model.email, this.model.password).subscribe((userId) => {
      this.authService.userId = userId;
      localStorage.setItem('userId', JSON.stringify(userId));
      if (userId) {
        this.router.navigateByUrl('/');
      }
    })
  }
}
