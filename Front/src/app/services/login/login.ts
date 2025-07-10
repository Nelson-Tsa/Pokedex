// import { Credentials } from './login';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { map, Observable, tap } from 'rxjs';


export interface Credentials{
  username: string,
  password: string
  firstName: string,
  lastName: string
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:3000'; // Rajoute l'url du port de backend ( serveur Java)

  user = signal<User | null | undefined>(undefined);
  constructor() { }
  login(credentials :Credentials): Observable<User | null | undefined >{
    
    return this.http.post(this.BASE_URL + '/login', credentials).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result['token']);
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);
      }),
      map((result: any) =>{
        return this.user();
      })
    )
  }

  getUsers(): Observable<User | null | undefined >{
    return this.http.get(this.BASE_URL + '/login/me').pipe(
      tap((result: any) => {
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);
      }),
      map((result: any) =>{
        return this.user();
      })
    )
  }

  logOut(): Observable<null>{
    return this.http.get(this.BASE_URL + '/logout').pipe(
      tap((result: any) => {
        localStorage.removeItem('token');
        this.user.set(null);
      }),
      map((result: any) =>{
        return null;
      })
    )
  }
}
