import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialog, IDialogCallback, IDialogParams } from '../model/dialog.model';

@Component({
  selector: 'class-dialog',
  template: '',
})
export class Dialog implements IDialog {
  public title: string;
  public message: string;
  public callbacks: IDialogCallback;

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogParams
  ) {
    this._setInitialValues();
  }

  private _setInitialValues() {
    this.title = this.data.title ?? '¡Atención!';
    this.message = this.data.message ?? '';
    this.callbacks = this.data.callbacks;
  }

  public onCancelClick(): void {
    this.dialogRef.close();
    if (this.callbacks) {
      this._execFunction(this.callbacks.cancel);
    }
  }

  public onOkClick(): void {
    if (this.callbacks) {
      this._execFunction(this.callbacks.ok);
    }
  }

  public onCloseClick(): void {
    this.dialogRef.close();
    if (this.callbacks) {
      this._execFunction(this.callbacks.close);
    }
  }

  private _execFunction(fn?: Function) {
    if (fn && fn instanceof Function) {
      fn();
    }
  }
}
