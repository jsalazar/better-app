import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroViewComponent } from './heroes/containers/hero-view/hero-view.component';
import { HeroDashboardComponent } from './heroes/containers/hero-dashboard/hero-dashboard.component';
import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroViewComponent },
  { path: 'dashboard', component: HeroDashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
