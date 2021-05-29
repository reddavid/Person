import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListPersonComponent} from './components/list-person/list-person.component';
import {CreatorComponent} from './components/creator/creator.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list-person', component: ListPersonComponent },
  { path: 'creator', component: CreatorComponent }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
