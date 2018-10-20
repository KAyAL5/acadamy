import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar, private _zone: NgZone) { }

  public openSnackBar(message: string): void {
    this._zone.run(() => {
      const snackBar = this._snackBar.open(message, 'OK', {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        duration: 2000
      });
      snackBar.onAction().subscribe(() => {
        snackBar.dismiss();
      })
    });
  }

}
