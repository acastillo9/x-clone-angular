import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetCounter'
})
export class TweetCounterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return String(value);
  }

}
