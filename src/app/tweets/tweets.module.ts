import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetCounterPipe } from '../shared/tweet-counter.pipe';
import { TweetButtonComponent } from './tweet/tweet-buttons/tweet-button/tweet-button.component';
import { TweetButtonsComponent } from './tweet/tweet-buttons/tweet-buttons.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TweetsComponent,
    TweetComponent,
    TweetButtonsComponent,
    TweetButtonComponent,
    TweetCounterPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    TweetsComponent
  ]
})
export class TweetsModule { }
