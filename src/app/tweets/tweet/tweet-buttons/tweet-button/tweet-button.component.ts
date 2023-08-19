import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-tweet-button',
  templateUrl: './tweet-button.component.html',
  styleUrls: ['./tweet-button.component.scss']
})
export class TweetButtonComponent {

  @Input()
  icon: IconDefinition | undefined = undefined;

  @Input()
  value: string = '';

  @Input()
  color: 'blue' | 'green' | 'red' = 'blue';
}
