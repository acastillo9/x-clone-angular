import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';

const USERS = [
  {
    id: 1,
    username: 'admin',
    password: '123456' 
  },
  {
    id: 2,
    username: 'admin2',
    password: '1234567' 
  },
]

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
    const loggedUser = USERS.find((user) => user.password === password && user.username === username);

    return new Observable<number>((subscriber) => {
      if (loggedUser) {
        subscriber.next(loggedUser.id);
      } else {
        subscriber.error(new Error('Username or password incorrect'))
      }
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
