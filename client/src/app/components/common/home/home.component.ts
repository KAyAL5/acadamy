import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/users/users.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  imageUrl: String = '';
  username = '';

  constructor(private _userSvc: UserService, private _router: Router) { 
    this._userSvc.getUserName()
    .subscribe(
      data => this.username = data.toString(),
      error => alert('token not found')
     // error => this._router.navigate(['/main/login'])
    )
  }

  ngOnInit() {  }

}
