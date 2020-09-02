import { ReversePipe } from './pipes/reverse.pipe';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { EventComponent } from './components/event/event.component';
import { InfoComponent } from './components/info/info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchComponent } from './components/match/match.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component'; 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    BlogComponent,
    MatchesComponent,
    NewsComponent,
    NextMatchComponent,
    VideosComponent,
    EventComponent,
    InfoComponent,
    AddMatchComponent,
    MatchComponent,
    PlayerComponent,
    PlayersComponent,
    DisplayMatchComponent,
    DisplayUserComponent,
    DisplayPlayerComponent,
    AllUsersComponent,
    EditUserComponent,
    ReversePipe  ],
  imports: [ 
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule, 
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
