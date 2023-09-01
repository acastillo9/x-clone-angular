import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersModule } from '../users/users.module';
import { SearchModule } from '../search/search.module';
import { HeaderModule } from '../header/header.module';
import { MenuResponsiveModule } from '../menu-responsive/menu-responsive.module';
import { TimelineModule } from '../timeline/timeline.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    UsersModule,
    SearchModule,
    HeaderModule,
    MenuResponsiveModule,
    TimelineModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
