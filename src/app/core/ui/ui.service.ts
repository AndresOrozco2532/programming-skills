import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { IDialogParams } from '../model/dialog.model';
import { ComponentType } from '@angular/cdk/portal';
import { Dialog } from '../class/dialog.class';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private _snackRef: MatSnackBarRef<any>;
  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog) {}

  public showSnackbar(msg: string, time = 5000, className = 'snackbar-error') {
    this._snackRef = this._snackBar.open(msg, 'x', {
      duration: time,
      panelClass: [className],
    });
    this._snackRef.onAction().subscribe(() => {
      this._snackRef.dismiss();
    });
  }

  public showDialog(
    data: IDialogParams,
    component: ComponentType<Dialog> = DialogComponent
  ) {
    const SIZE_DIALOG = '30rem';
    const className = data.className ?? 'mat-modal';

    if (!data.isHTMLMessage) {
      const align = data.textAlign ? 'text-center' : '';
      data.message = `<p class="modal-body__message ${align}"> ${data.message} </p> `;
    }

    const confDialog = {
      width: SIZE_DIALOG,
      data,
      disableClose: true,
      panelClass: className,
    };
    this._dialog.open(component, confDialog);
  }
}
