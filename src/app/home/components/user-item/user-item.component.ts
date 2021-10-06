import { Component, Input, OnInit } from '@angular/core';
import { iUser } from '@app/core/model/user.model';

@Component({
  selector: 'home-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user: iUser;

  constructor() {}

  ngOnInit(): void {}
}
