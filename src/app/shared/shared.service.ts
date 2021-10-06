import { Injectable } from '@angular/core';
import { UIService } from '../core/ui/ui.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private _uiService: UIService) {}

  public showSnackbar(msg: string) {
    this._uiService.showSnackbar(msg);
  }
}
