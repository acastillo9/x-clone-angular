import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/users/auth.service';
import { User } from 'src/app/users/user.model';
import { TweetsService } from '../tweets/tweets.service';
import { TweetSave } from '../tweets/types';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss']
})
export class CreateTweetComponent implements OnInit {

  @Input()
  tweetId: number | null | undefined;

  @Input()
  placeholder: string = '';

  @Input()
  buttonText: string = '';

  profileImage: string | undefined = undefined;
  username: string | undefined = '';
  userObservable: Observable<User | undefined> = new Observable();
  tweetText: string = '';

  constructor(private authService: AuthService, private tweetService: TweetsService) {}

  ngOnInit(): void {
    this.userObservable = this.authService.loggedUserSubject.asObservable();
  }

  saveTweet() {
    if(this.tweetText) {
      const tweet: TweetSave = {
        text: this.tweetText,
        userId: this.authService.userId,
        date: new Date(), // Deberia ser responsabilidad del backend poner esta fecha
        tweetId: this.tweetId,
      }
      this.tweetService.saveTweet(tweet).subscribe((savedTweet) => {
        console.log('Tweet guardado', savedTweet);
        savedTweet.user = this.authService.loggedUserSubject.value!;
        this.tweetService.newTweetSubject.next(savedTweet);
        this.tweetText = '';
      });
    }
  }
}
