import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetsService } from '../tweets/tweets.service';
import { Observable } from 'rxjs';
import { Tweet } from '../tweets/tweet.model';

@Component({
  selector: 'app-tweet-view',
  templateUrl: './tweet-view.component.html',
  styleUrls: ['./tweet-view.component.scss']
})
export class TweetViewComponent implements OnInit {

  tweet$: Observable<Tweet> | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      const id = params['id'];
      this.tweet$ = this.tweetsService.getTweet(id);
    })
  }
}
