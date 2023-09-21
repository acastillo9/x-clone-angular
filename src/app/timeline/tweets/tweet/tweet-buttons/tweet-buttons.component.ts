import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChartSimple, faArrowUpFromBracket, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tweet-buttons',
  templateUrl: './tweet-buttons.component.html',
  styleUrls: ['./tweet-buttons.component.scss']
})
export class TweetButtonsComponent {

  @Input()
  tweetId: number | undefined;

  @Input()
  replays: number = 0;
  
  @Input()
  retweets: number = 0;

  @Input()
  likes: number = 0;

  @Input()
  views: number = 0;

  @Output()
  addLike: EventEmitter<void> = new EventEmitter();

  faComment = faComment;
  faChartSimple = faChartSimple;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faRetweet = faRetweet;
  faHeart = faHeart;

  likeClicked($event: MouseEvent) {
    $event.stopPropagation();
    this.addLike.emit();
  }
}
