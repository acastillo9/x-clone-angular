import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { TweetCounterPipe } from '../shared/tweet-counter.pipe';
import { TweetButtonComponent } from './tweets/tweet/tweet-buttons/tweet-button/tweet-button.component';
import { TweetButtonsComponent } from './tweets/tweet/tweet-buttons/tweet-buttons.component';
import { TweetComponent } from './tweets/tweet/tweet.component';
import { TweetsComponent } from './tweets/tweets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { FormsModule } from '@angular/forms';
import { TweetViewComponent } from './tweet-view/tweet-view.component';


@NgModule({
  declarations: [
    TimelineComponent,
    TweetsComponent,
    TweetComponent,
    TweetButtonsComponent,
    TweetButtonComponent,
    TweetCounterPipe,
    CreateTweetComponent,
    TweetViewComponent,
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    TweetsComponent
  ]
})
export class TimelineModule { }
