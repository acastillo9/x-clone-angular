import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuResponsiveComponent } from './menu-responsive.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MenuResponsiveComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    MenuResponsiveComponent
  ]
})
export class MenuResponsiveModule { }
