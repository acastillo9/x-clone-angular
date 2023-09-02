import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input()
  tweet: Tweet | undefined = undefined;
}
