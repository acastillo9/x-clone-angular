import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/users/auth.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss']
})
export class CreateTweetComponent implements OnInit {

  profileImage: string | undefined = undefined;
  username: string | undefined = '';
  userObservable: Observable<User | undefined> = new Observable();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userObservable = this.authService.loggedUserSubject.asObservable();
  }
}
