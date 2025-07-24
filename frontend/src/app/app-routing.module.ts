import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { FavoriteGamesComponent } from './home/components/favorite-games/favorite-games.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { NoAuthGuardService } from './services/no-auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'games', component: GamesComponent, canActivate: [AuthGuardService],},
      { path: 'games/game/:id', component: GameComponent, canActivate: [AuthGuardService],},
      { path: 'favorites', component: FavoriteGamesComponent, canActivate: [AuthGuardService],},
    ]
  },
  { path: 'users', component: UsersComponent,canActivate: [AuthGuardService],},
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuardService],},
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuardService],},
  { path: '', redirectTo: '/games', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
