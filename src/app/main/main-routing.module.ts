import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../users/auth.guard';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivateChild: [authGuard], 
    children: [
      { 
        path: 'timeline',
        loadChildren: () => import('../timeline/timeline.module').then((m) => m.TimelineModule),
      },
      {
        path: 'search', 
        loadChildren: () => import('../search/search.module').then((m) => m.SearchModule)
      },
      { path: '', redirectTo: 'timeline', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
