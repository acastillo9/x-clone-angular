import { Component } from '@angular/core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChartSimple, faArrowUpFromBracket, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tweet-buttons',
  templateUrl: './tweet-buttons.component.html',
  styleUrls: ['./tweet-buttons.component.scss']
})
export class TweetButtonsComponent {
  faComment = faComment;
  faChartSimple = faChartSimple;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faRetweet = faRetweet;
  faHeart = faHeart;
}
