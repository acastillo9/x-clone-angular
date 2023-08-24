import { Component } from '@angular/core';
import { Tweet } from './tweet.model';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent {
  tweets: Tweet[] = [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo natus modi facilis vel itaque sequi porro tenetur quidem ipsam commodi, quasi asperiores quibusdam quis mollitia, velit ratione facere assumenda?',
      date: new Date('2023-08-23T23:37:32.322Z'),
      user: {
        id: '1',
        name: 'Laura',
        username: '@laura.alvarez',
        email: 'laura.alvarez@mail.com',
        profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      replaysCount: 100000,
      retweetsCount: 200000,
      likesCount: 23000,
      viewsCount: 500000,
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium molestias quas aliquam pariatur officia sequi itaque, consequatur possimus eum ducimus modi necessitatibus maiores doloribus quam maxime molestiae earum animi.',
      date: new Date('2023-08-22T20:22:31.322Z'),
      user: {
        id: '1',
        name: 'Luisa',
        username: '@luisa.castro',
        email: 'luisa.castro@mail.com',
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      replaysCount: 10000,
      retweetsCount: 200030,
      likesCount: 45000,
      viewsCount: 100000,
    },
    {
      id: '3',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam provident ipsam nostrum praesentium harum odit nam placeat, consequatur itaque, rem quas similique perspiciatis! Provident minima dignissimos nostrum repellendus a error.',
      date: new Date('2023-07-12T10:35:20.322Z'),
      user: {
        id: '1',
        name: 'Ricardo',
        username: '@ricardo.munoz',
        email: 'ricardo.munoz@mail.com',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      replaysCount: 50000,
      retweetsCount: 300000,
      likesCount: 13000,
      viewsCount: 40000,
    },
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo natus modi facilis vel itaque sequi porro tenetur quidem ipsam commodi, quasi asperiores quibusdam quis mollitia, velit ratione facere assumenda?',
      date: new Date('2023-08-23T23:37:32.322Z'),
      user: {
        id: '1',
        name: 'Laura',
        username: '@laura.alvarez',
        email: 'laura.alvarez@mail.com',
        profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      replaysCount: 100000,
      retweetsCount: 200000,
      likesCount: 23000,
      viewsCount: 500000,
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium molestias quas aliquam pariatur officia sequi itaque, consequatur possimus eum ducimus modi necessitatibus maiores doloribus quam maxime molestiae earum animi.',
      date: new Date('2023-08-22T20:22:31.322Z'),
      user: {
        id: '1',
        name: 'Luisa',
        username: '@luisa.castro',
        email: 'luisa.castro@mail.com',
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      replaysCount: 10000,
      retweetsCount: 200030,
      likesCount: 45000,
      viewsCount: 100000,
    },
    {
      id: '3',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam provident ipsam nostrum praesentium harum odit nam placeat, consequatur itaque, rem quas similique perspiciatis! Provident minima dignissimos nostrum repellendus a error.',
      date: new Date('2023-07-12T10:35:20.322Z'),
      user: {
        id: '1',
        name: 'Ricardo',
        username: '@ricardo.munoz',
        email: 'ricardo.munoz@mail.com',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      replaysCount: 50000,
      retweetsCount: 300000,
      likesCount: 13000,
      viewsCount: 40000,
    }
  ]
}
