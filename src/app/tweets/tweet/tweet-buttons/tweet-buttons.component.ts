import { Component, Input } from '@angular/core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChartSimple, faArrowUpFromBracket, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tweet-buttons',
  templateUrl: './tweet-buttons.component.html',
  styleUrls: ['./tweet-buttons.component.scss']
})
export class TweetButtonsComponent {

  @Input()
  replays: number = 0;
  
  @Input()
  retweets: number = 0;

  @Input()
  likes: number = 0;

  @Input()
  views: number = 0;

  faComment = faComment;
  faChartSimple = faChartSimple;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faRetweet = faRetweet;
  faHeart = faHeart;
}
