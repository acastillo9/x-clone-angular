import { TweetCounterPipe } from './tweet-counter.pipe';

describe('TweetCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new TweetCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
