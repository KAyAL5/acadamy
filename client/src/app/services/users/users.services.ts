import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  IsValidUser(Credential: any): boolean {
    if (Credential.username === 'admin' && Credential.password === 'admin') {
        return true;
    }
    return false;
  }

  addPushSubscriber(sub: any) {
    return this.http.post('/contact', sub);
}
}
