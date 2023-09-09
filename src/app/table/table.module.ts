import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { TweetsService } from '../timeline/tweets/tweets.service';
import { Observable } from 'rxjs';
import { Tweet } from '../timeline/tweets/tweet.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class TableModule {}
