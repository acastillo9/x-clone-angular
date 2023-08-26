import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineComponent } from './timeline/timeline.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetComponent } from './tweets/tweet/tweet.component';
import { TweetButtonsComponent } from './tweets/tweet/tweet-buttons/tweet-buttons.component';
import { TweetButtonComponent } from './tweets/tweet/tweet-buttons/tweet-button/tweet-button.component';
import { TweetCounterPipe } from './shared/tweet-counter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MenuResponsiveComponent } from './menu-responsive/menu-responsive.component';
import { MainComponent } from './main/main.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TimelineComponent,
    TweetsComponent,
    TweetComponent,
    TweetButtonsComponent,
    TweetButtonComponent,
    TweetCounterPipe,
    MenuResponsiveComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
