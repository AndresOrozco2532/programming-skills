import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public getUserInfo(): Observable<iUser> {
    return this._http.get<iUser>('/user-info/');
  }
  public getAllUsers(): Observable<iUser[]> {
    return this._http.get<iUser[]>('/users-list/');
  }
}
