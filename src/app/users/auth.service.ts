import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';

const USERNAME = 'admin';
const PASSWORD = '123456';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: number = JSON.parse(localStorage.getItem('userId') ?? '0');
  loggedUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor() { }

  login(username: string, password: string) {
    return new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
    });
  }

  logout() {
    this.userId = 0;
    this.loggedUserSubject.next(undefined);
    localStorage.clear();
  }

  isLoggedIn() {
    return !!this.userId;
  }
}
