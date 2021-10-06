import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private _snackRef: MatSnackBarRef<any>;
  constructor(private _snackBar: MatSnackBar) {}
  public showSnackbar(msg: string, time = 5000, className = 'snackbar-error') {
    this._snackRef = this._snackBar.open(msg, 'x', {
      duration: time,
      panelClass: [className],
    });
    this._snackRef.onAction().subscribe(() => {
      this._snackRef.dismiss();
    });
  }
}
