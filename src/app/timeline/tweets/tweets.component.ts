import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Tweet } from './tweet.model';
import { TweetsService } from './tweets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {

  @Input()
  userId: number | undefined;

  @Input()
  tweetId: number | undefined;

  tweets: Tweet[] = [];
  isNewTweet = false;
  tweetsSubscription: Subscription | undefined = undefined;
  newTweetSubscription: Subscription | undefined = undefined;

  constructor(private tweetsService: TweetsService) {
    // tweetsService.getTweets()
    //   .then((tweets) => {
    //     this.tweets = tweets;
    //   }).catch((error) => {
    //     console.log(error);
    //   }).finally(() => {
    //     console.log('Termina la promesa');
    //   });
  }

  ngOnInit() {
    let tweetsService$ = this.tweetsService.getTweets();
    if (this.userId) {
      tweetsService$ = this.tweetsService.getTweetsByUserId(this.userId);
    } else if (this.tweetId) {
      tweetsService$ = this.tweetsService.getReplies(this.tweetId);
    }

    this.tweetsSubscription = tweetsService$.subscribe({
      next: (tweets) => {
        this.tweets = tweets;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Termina el observable');
      }
    });

    this.newTweetSubscription = this.tweetsService.newTweetSubject.subscribe((newTweet) => {
      this.tweets = [newTweet, ...this.tweets];
      this.isNewTweet = true;
    });
  }

  ngOnDestroy(): void {
    if (this.tweetsSubscription) {
      this.tweetsSubscription.unsubscribe();
    }
    if (this.newTweetSubscription) {
      this.newTweetSubscription.unsubscribe();
    }
  }
}
