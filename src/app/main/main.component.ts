import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  faFeather = faFeather
  activatedRoute$: Subscription | undefined = undefined;
  router$: Subscription | undefined = undefined;
  title: string = 'Home';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.title = this.activatedRoute.firstChild?.snapshot.data['title'];
    this.router$ = this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          console.log(this.activatedRoute.firstChild?.snapshot.data);
          this.title = this.activatedRoute.firstChild?.snapshot.data['title'];
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.router$?.unsubscribe();
  }
}
