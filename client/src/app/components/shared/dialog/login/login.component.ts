import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NotificationService } from '../../../../services/utilities/notification.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialogComponent implements OnInit {

  form: FormGroup;
  username: string;
  password: string;

  showSpinner: Boolean = false;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private snackBar: NotificationService,
    @Inject(MAT_DIALOG_DATA) { username, password}) {
    this.username = username;
    this.password = password;
    this.form = fb.group({
      username: [username, Validators.required],
      password: [password, Validators.required]
    });
  }

  ngOnInit() {
  }

  login(): void {
    console.log(this.form.value);
    this.showLoader();
    if (this.username === 'admin' && this.password === 'admin') {
      // this.router.navigate(['user']);
    } else {
      this.snackBar.notify('Invalid Credentials !!!');
    }
  }

  showLoader() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

  close() {
    this.dialogRef.close();
  }
}
