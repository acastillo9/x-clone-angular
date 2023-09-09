import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { TweetViewComponent } from './tweet-view/tweet-view.component';

const routes: Routes = [
  { path: 'tweet/:id', component: TweetViewComponent },
  { path: '', component: TimelineComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
