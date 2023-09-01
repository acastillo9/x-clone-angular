import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const USERNAME = 'admin';
const PASSWORD = '123456';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: number = JSON.parse(localStorage.getItem('userId') ?? '0');

  constructor() { }

  login(username: string, password: string) {
    return new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
    });
  }

  logout() {
    this.userId = 0;
    localStorage.clear();
  }

  isLoggedIn() {
    return !!this.userId;
  }
}
