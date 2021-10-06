import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UIService } from 'src/app/core/ui/ui.service';

import { CONSTANTS_FORMS } from '../constants/shared-forms.constant';
import { SharedService } from '../shared.service';

@Directive({
  selector: '[appFormValidate]',
})
export class FormValidateDirective {
  @Input('appFormValidate') form: FormGroup;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _sharedService: SharedService
  ) {}

  @HostListener('submit', ['$event'])
  onSubmit(_: any) {
    this._focusFirstError();
  }
  private _focusFirstError() {
    let selector = CONSTANTS_FORMS.SELECTORS.FORM;
    this._renderer.addClass(this._el.nativeElement, 'submited');

    const error = this.checkDiferentError(this.form);
    if (error) {
      const message = error.message ? error.message : error;
      this._sharedService.showSnackbar(message);

      if (error.control) {
        selector = `[formcontrolname=${error.control}]:not(.form) input`;
      }
    }

    const invalidElements = this._el.nativeElement.querySelector(selector);
    if (invalidElements) {
      invalidElements.focus();
    }
  }

  checkDiferentError(control: AbstractControl | FormGroup) {
    const errorsChild = this.checkControlError(control);
    if (errorsChild) return errorsChild;
    if (!control.errors) return null;

    for (const errorName in control.errors) {
      const error = control.errors[errorName];
      if (errorName === 'required' || errorName === 'minlength') {
        return CONSTANTS_FORMS.MESSAGES.ERROR_FIELD_REQUIRED;
      }
      if (errorName === 'min') {
        const min = error.min;
        return CONSTANTS_FORMS.MESSAGES.ERROR_MINIMAL_VALUE_LOAN.replace(
          '{{value}}',
          min.toString()
        );
      }
      if (errorName === 'max') {
        const max = error.max;
        return CONSTANTS_FORMS.MESSAGES.ERROR_MAXIMUM_VALUE_LOAN.replace(
          '{{value}}',
          max.toString()
        );
      }
      return error;
    }
  }

  checkControlError(control: AbstractControl | FormGroup): any {
    if (control instanceof FormGroup) {
      for (const key in control.controls) {
        const child = control.controls[key];
        const error = this.checkDiferentError(child);
        if (error) {
          return error;
        }
      }
    }
  }
}
