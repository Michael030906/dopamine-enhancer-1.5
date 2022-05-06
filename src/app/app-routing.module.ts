import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { FavDadJokesComponent } from './favorites/fav-dad-jokes/fav-dad-jokes.component';
import { FavMomJokesComponent } from './favorites/fav-mom-jokes/fav-mom-jokes.component';
import { FavWholesomeComponent } from './favorites/fav-wholesome/fav-wholesome.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ForumsComponent } from './forums/forums.component';
import { HomeComponent } from './home/home.component';
import { MomJokesComponent } from './mom-jokes/mom-jokes.component';
import { WholesomeFactsComponent } from './wholesome-facts/wholesome-facts.component';

const routes: Routes = [
{path:'' , redirectTo: '/home', pathMatch: 'full' },
{path:'home', component:HomeComponent},
{path:'forums', component:ForumsComponent},
{path:'MomJokes', component:MomJokesComponent},
{path:'DadJokes', component:DadJokesComponent},
{path:'WholesomeFacts', component:WholesomeFactsComponent},
{path:'Favorites', component:FavoritesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
