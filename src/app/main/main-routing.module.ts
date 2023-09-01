import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';
import { authGuard } from '../users/auth.guard';
import { SearchComponent } from '../search/search.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivateChild: [authGuard], 
    children: [
      { path: 'timeline', component: TimelineComponent },
      { path: 'search', component: SearchComponent },
      { path: '', redirectTo: 'timeline', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
