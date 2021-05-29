import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Person} from '../../model/person';
import {MatSort} from '@angular/material/sort';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {EditPersonComponent} from '../edit-person/edit-person.component';
import {AddPersonComponent} from '../add-person/add-person.component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent {

  title = 'Person';
  displayedColumns: string[] = ['name', 'telecom', 'gender', 'birthdate', 'address', 'actions'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    this.afs.collection<Person>('Person').valueChanges({idField: 'id'}).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  deleteUser(data): void {
    this.afs.collection('Person').doc(data.id).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error deleting document: ', error);
    });
  }


  trackByUid(index, item): any {
    return item.id;
  }

  openEditDialog(data): void {
    this.dialog.open(EditPersonComponent, {
      width: '350px',
      data
    });
  }

  openAddDialog(): void {
    this.dialog.open(AddPersonComponent, {
      width: '350px'
    });
  }

}
