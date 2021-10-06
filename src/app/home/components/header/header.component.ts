import { Component, Input, OnInit } from '@angular/core';
import { iUser } from '@app/core/model/user.model';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../shared/constants/constant';
import {
  IDialogButtons,
  IDialogCallback,
  IDialogParams,
} from '@app/core/model/dialog.model';
import { UIService } from '../../../core/ui/ui.service';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: iUser;

  public showMenu: boolean;
  constructor(private _router: Router, private _iuService: UIService) {}

  ngOnInit(): void {
    this._setInitialValues();
  }

  public onToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public onLogout(): void {
    this._router.navigateByUrl(CONSTANTS.ROUTES.LOGIN);
  }

  private _setInitialValues() {
    this.showMenu = false;
  }
}
