import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.2)' }),
        animate('0.3s', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class TweetComponent {
  @Input()
  tweet: Tweet | undefined = undefined;
  
  @Input()
  isNew: boolean = false;
}
