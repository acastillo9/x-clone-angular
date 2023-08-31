import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const USERNAME = 'admin';
const PASSWORD = '123456';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = JSON.parse(localStorage.getItem('isLoggedIn') ?? 'false');

  constructor() { }

  login(username: string, password: string) {
    return new Observable<boolean>((subscriber) => {
      subscriber.next(username === USERNAME && password === PASSWORD);
      subscriber.complete();
    });
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
