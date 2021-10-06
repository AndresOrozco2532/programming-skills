import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { UserItemComponent } from '../components/user-item/user-item.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, UserItemComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
