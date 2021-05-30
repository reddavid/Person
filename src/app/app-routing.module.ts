import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListPersonComponent} from './components/list-person/list-person.component';
import {CreatorComponent} from './components/creator/creator.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list-person', component: ListPersonComponent, canActivate: [AuthService] },
  { path: 'creator', component: CreatorComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
