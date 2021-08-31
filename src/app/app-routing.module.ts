import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PopularComponent } from './components/popular/popular.component';
import { HomeComponent } from './components/home/home.component';
import { BollywoodComponent } from './components/bollywood/bollywood.component';
import { HollywoodComponent } from './components/hollywood/hollywood.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'popular', component: PopularComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'hollywood', component: HollywoodComponent},
  {path: 'bollywood', component: BollywoodComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
