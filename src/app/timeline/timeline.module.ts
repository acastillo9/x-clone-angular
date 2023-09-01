import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { TweetsModule } from '../tweets/tweets.module';



@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TweetsModule
  ]
})
export class TimelineModule { }
