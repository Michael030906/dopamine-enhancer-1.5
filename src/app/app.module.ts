import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MomJokesComponent } from './mom-jokes/mom-jokes.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { HomeComponent } from './home/home.component';
import { WholesomeFactsComponent } from './wholesome-facts/wholesome-facts.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavMomJokesComponent } from './favorites/fav-mom-jokes/fav-mom-jokes.component';
import { FavDadJokesComponent } from './favorites/fav-dad-jokes/fav-dad-jokes.component';
import { FavWholesomeComponent } from './favorites/fav-wholesome/fav-wholesome.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumsListComponent } from './forums/forums-list/forums-list.component';
import { ForumsDetailsComponent } from './forums/forums-details/forums-details.component';
import { ContentComponent } from './shared/content/content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MomJokesComponent,
    DadJokesComponent,
    HomeComponent,
    WholesomeFactsComponent,
    FavoritesComponent,
    FavMomJokesComponent,
    FavDadJokesComponent,
    FavWholesomeComponent,
    ForumsComponent,
    ForumsListComponent,
    ForumsDetailsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }