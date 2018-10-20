import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
// import * as moment from 'moment';

import { UserService } from '../../../../services/users/users.services';

import { IUser } from '../../../../interfaces/user';

@Component({
  selector: 'app-registerdialog',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegistrationDialogComponent implements OnInit {

  registerForm: FormGroup;
  description: string;

  constructor(private _userSvc: UserService,
    private _dialogRef: MatDialogRef<RegistrationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { email, username, password, company }: IUser) {

    this.registerForm = new FormGroup({
      company: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this._userSvc.registerUser(this.registerForm.value)
        .subscribe(
          data => alert('Registration Success'),
          error => alert('Registration Failed')
        );
    }
   // this.close();
  }

  close() {
    this._dialogRef.close();
  }

}
