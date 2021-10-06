import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '@app/core/class/dialog.class';
import { IDialogButtons, IDialogParams } from '@app/core/model/dialog.model';

@Component({
  selector: 'layout-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent extends Dialog {
  public infoButton: IDialogButtons;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogParams
  ) {
    super(dialogRef, data);
    const defaultButtons = {
      showButtons: true,
      showButtonClose: true,
      showButtonCancel: false,
      showButtonOk: true,
      textCancel: 'Cancelar',
      textOk: 'Aceptar',
    };
    this.infoButton = { ...defaultButtons, ...data.infoButton };
  }
}
