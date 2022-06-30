import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MomJokesComponent } from './mom-jokes/mom-jokes.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavDadJokesComponent} from './favorites/fav-dad-jokes/fav-dad-jokes.component';
import { FavMomJokesComponent } from './favorites/fav-mom-jokes/fav-mom-jokes.component';
import { FavWholesomeComponent } from './favorites/fav-wholesome/fav-wholesome.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumsListComponent } from './forums/forums-list/forums-list.component';
import { ForumsDetailsComponent } from './forums/forums-details/forums-details.component';
import { ContentComponent } from './shared/content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormComponent } from './forums/input-form/input-form.component';
import { ChuckNJokesComponent } from './chuck-n-jokes/chuck-n-jokes.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MomJokesComponent,
    HomeComponent,
    DadJokesComponent,
    FavoritesComponent,
    FavDadJokesComponent,
    FavMomJokesComponent,
    FavWholesomeComponent,
    ForumsComponent,
    ForumsListComponent,
    ForumsDetailsComponent,
    ContentComponent,
    InputFormComponent,
    ChuckNJokesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
