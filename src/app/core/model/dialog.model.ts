export interface IDialog {
  title: string;
  message: string;
  callbacks: IDialogCallback;
  onCancelClick(): void;
  onOkClick(): void;
  onCancelClick(): void;
}

export interface IDialogCallback {
  close?: Function;
  ok?: Function;
  cancel?: Function;
}

export interface IDialogParams {
  message: string;
  title?: string;
  size?: string;
  isHTMLMessage?: boolean;
  textAlign?: string;
  className?: string;
  callbacks?: IDialogCallback;
  infoButton?: IDialogButtons;
}

export interface IDialogButtons {
  showButtons?: boolean;
  showButtonOk?: boolean;
  showButtonClose?: boolean;
  showButtonCancel?: boolean;
  textCancel?: string;
  textOk: string;
}
