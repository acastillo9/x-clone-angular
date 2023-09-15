import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { User } from '../users/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<User | undefined> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.loggedUserSubject.asObservable();
  }

}
