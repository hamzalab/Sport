import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'add-match', component: AddMatchComponent },
  {path: 'matches', component: MatchesComponent },
  {path: 'players', component: PlayersComponent },
  {path: 'displayMatch/:id', component:  DisplayMatchComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'display-user/:id', component: DisplayUserComponent },
  {path: 'edit-user/:id', component: EditUserComponent}








  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
