import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { iUser } from '../../core/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public user: iUser;
  public userList: iUser[];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._setInitialValues();
  }
  private _setInitialValues() {
    this._userService.getUserInfo().subscribe((user) => (this.user = user));
    this._userService
      .getAllUsers()
      .subscribe((users) => (this.userList = users));
  }
}
