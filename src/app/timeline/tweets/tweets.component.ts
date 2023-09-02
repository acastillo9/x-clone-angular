import { Component } from '@angular/core';
import { Tweet } from './tweet.model';
import { TweetsService } from './tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent {
  tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) {
    // tweetsService.getTweets()
    //   .then((tweets) => {
    //     this.tweets = tweets;
    //   }).catch((error) => {
    //     console.log(error);
    //   }).finally(() => {
    //     console.log('Termina la promesa');
    //   });

    tweetsService.getTweets().subscribe({
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
  }
}
