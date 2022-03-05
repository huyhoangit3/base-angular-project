import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/services/auth/auth-guard.service';
import { LoginComponent } from '../shared/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInAreaComponent } from './components/logged-in-area/logged-in-area.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'logged-in-area', component: LoggedInAreaComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
