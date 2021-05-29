import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './components/person/person.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {environment} from '../environments/environment';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import {FormsModule} from '@angular/forms';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { CreatorComponent } from './components/creator/creator.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EditPersonComponent,
    AddPersonComponent,
    HomeComponent,
    ListPersonComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditPersonComponent]
})
export class AppModule { }
