import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get users() {
    return JSON.parse(localStorage.getItem('users'));
  }
  constructor(private http: HttpClient) { }


  register(user: User) {
    return this.http.post(`/users/register`, user);

  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));


        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  isLoggedIn() {
    return JSON.parse(localStorage.getItem('userInfo')) ? true : false;
  }
}
