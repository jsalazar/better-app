import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// CONTAINERS
import { HeroDashboardComponent } from './containers/hero-dashboard/hero-dashboard.component';
import { HeroViewComponent } from './containers/hero-view/hero-view.component';

// COMPONENTS
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

// SERVICE
// import { HeroService } from './hero.service';

// const routes: Routes = [
//   { path: 'heroes', component: HeroViewComponent },
//   { path: 'dashboard', component: HeroDashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent }
// ];


@NgModule({
  declarations: [
    HeroViewComponent,
    HeroDashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    // RouterModule.forChild(routes),
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroViewComponent 
   ],
   providers: [
    //  HeroService
   ]
})

export class HeroesModule {}