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
    this.authService.login(this.model.email, this.model.password).subscribe((isLoggedIn) => {
      console.log(isLoggedIn);
      this.authService.isLoggedIn = isLoggedIn;
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      if (isLoggedIn) {
        this.router.navigateByUrl('/');
      }
    })
  }
}
