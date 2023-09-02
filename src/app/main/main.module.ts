import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersModule } from '../users/users.module';
import { HeaderModule } from '../header/header.module';
import { MenuResponsiveModule } from '../menu-responsive/menu-responsive.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    UsersModule,
    HeaderModule,
    MenuResponsiveModule,
  ]
})
export class MainModule { }
