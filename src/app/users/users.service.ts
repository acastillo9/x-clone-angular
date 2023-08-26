import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }
}
