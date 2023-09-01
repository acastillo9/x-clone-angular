import { Component, OnInit } from '@angular/core';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faFeather = faFeather;
  user: User | undefined = undefined;

  constructor(private authService: AuthService, private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUserById(this.authService.userId).subscribe((user) => {
      this.user = user;
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
