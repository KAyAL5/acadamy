import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { RegistrationDialogComponent } from '../../components/shared/dialog/registration/register.component';
import { LoginDialogComponent } from '../../components/shared/dialog/login/login.component';
import { CourseDialogComponent } from '../../components/shared/dialog/course/course-dialog.component';
import { ConfirmDialogComponent } from '../../components/shared/dialog/confirm/confirm.component';

@Injectable()
export class DialogService {

  data: any = {};
  constructor(private dialog: MatDialog) { }

  showRegistrationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.data;
    dialogConfig.disableClose = true;
    this.dialog.open(RegistrationDialogComponent, dialogConfig);
  }

  showLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.data;
    dialogConfig.disableClose = true;
    this.dialog.open(LoginDialogComponent, dialogConfig);
  }

  openCourseDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.data;
    dialogConfig.disableClose = true;
    this.dialog.open(CourseDialogComponent, dialogConfig);
  }

  showConfirmDiaog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.data = 'This text is passed into the dialog!';
    this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
      data: this.data,
      disableClose: true
    });
  }
}
