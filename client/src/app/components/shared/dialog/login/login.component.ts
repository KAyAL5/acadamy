import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { UserService } from '../../../../services/users/users.services';
import { SnackBarService } from '../../../../services/utilities/snackBar.service'

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;
  showSpinner: Boolean = false;

  constructor(
    private _userSvc: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: SnackBarService,
    private _dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { email, password}) {

    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.showLoader();
      this._userSvc.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._snackBar.openSnackBar('Login Successfully !!!');
            this._router.navigate(['/home']);
            this.close();
          },
          error => { this._snackBar.openSnackBar('Invalid Credentials !!!'); }
        );
    }
  }

  // login(): void {
  //   console.log(this.loginForm.value);
  //   this.showLoader();
  //   if (this.email === 'admin' && this.password === 'admin') {
  //     // this.router.navigate(['user']);
  //   } else {
  //     this._snackBar.openSnackBar('Invalid Credentials !!!');
  //   }
  // }

  showLoader() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

  close() {
    this._dialogRef.close();
  }
}
