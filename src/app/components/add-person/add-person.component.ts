import {Component, Inject } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Person} from '../../model/person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  public addVezeteknev: string;
  public addKeresztnev: string;
  public addTelefonszam: string;
  public addNem: string;
  public addSzuletesiDatum: string;
  public addLakhely: string;
  private newPerson: Person;

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<AddPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  addNew(): void {
    this.newPerson = new Person(this.addVezeteknev, this.addKeresztnev,
      this.addTelefonszam, this.addNem, this.addSzuletesiDatum, this.addLakhely);

    this.afs.collection('Person').add(Object.assign({}, this.newPerson)).then(() => {
      console.log('Document successfully added!');
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
    this.dialogRef.close();
  }


}
