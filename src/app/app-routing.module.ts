import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNJokesComponent } from './chuck-n-jokes/chuck-n-jokes.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ForumsComponent } from './forums/forums.component';
import { HomeComponent } from './home/home.component';
import { MomJokesComponent } from './mom-jokes/mom-jokes.component';



const routes: Routes = [
{path:'' , redirectTo: '/home', pathMatch: 'full' },
{path:'home', component:HomeComponent},
{path:'forums', component:ForumsComponent},
{path:'MomJokes', component:MomJokesComponent},
{path:'chuck-norris-jokes', component:ChuckNJokesComponent},
{path:'DadJokes', component:DadJokesComponent},
{path:'Favorites', component:FavoritesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
