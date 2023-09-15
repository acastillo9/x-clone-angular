import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../timeline/tweets/tweet.model';
import { TweetsService } from '../timeline/tweets/tweets.service';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';
import { TweetSave } from '../timeline/tweets/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  faEye = faEye;
  faPen = faPen;
  faTrash = faTrash;
  isOpenModal = false;

  tweetsObservable: Observable<Tweet[]> = new Observable();
  usersObservable: Observable<User[]> | undefined = undefined;
  tweetObservable: Observable<Tweet> | undefined = undefined;
  tweet: Tweet | undefined = undefined;

  tweetForm = new FormGroup({
    id: new FormControl(''),
    text: new FormControl(''),
    userId: new FormControl('')
  });

  constructor(private tweetsService: TweetsService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.tweetsObservable = this.tweetsService.getTweets();
    this.usersObservable = this.usersService.getUsers();
  }

  openModal() {
    this.isOpenModal = true;
  }

  saveTweet() {
    console.log(this.tweetForm.getRawValue());
    const rawTweet = this.tweetForm.getRawValue();
    const newTweet: TweetSave = {
      text: rawTweet.text!,
      userId: Number(rawTweet.userId!),
      date: new Date,
    }
    if (!this.tweetForm.get('id')?.value) {
      this.tweetsService.saveTweet(newTweet).subscribe(() => {
        console.log('tweet guardado');
        this.tweetForm.reset();
        this.tweetsObservable = this.tweetsService.getTweets();
      })
    } else {
      const value = Number(this.tweetForm.get('id')!.value!)
      this.tweetsService.updateTweet(value, newTweet).subscribe(() => {
        console.log('tweet guardado');
        this.tweetForm.reset();
        this.tweetsObservable = this.tweetsService.getTweets();
      })
    }
  }

  editTweet(id: number) {
    this.tweetsService.getTweet(id).subscribe((tweet) => {
      this.tweetForm.get('id')?.setValue(String(tweet.id));
      this.tweetForm.get('text')?.setValue(tweet.text);
      this.tweetForm.get('userId')?.setValue(String(tweet.user.id));
      this.openModal();
    });
  }

  deleteTweet(id: number) {
    this.tweetsService.deleteTweet(id).subscribe(() => {
      console.log('Tweet eliminado');
      this.tweetsObservable = this.tweetsService.getTweets();
    });
  }
}
