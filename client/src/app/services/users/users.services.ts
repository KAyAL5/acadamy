import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }

  registerUser(body:any){
    return this._http.post('http://localhost:3000/api/user/register', body,{
      observe:'body'
    });
  }
  
  login(body:any){
    return this._http.post('http://localhost:3000/api/user/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get('http://localhost:3000//api/user/activeuser', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  IsValidUser(Credential: any): boolean {
    if (Credential.username === 'admin' && Credential.password === 'admin') {
        return true;
    }
    return false;
  }
}
