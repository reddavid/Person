import {Component, Inject} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Person} from '../../model/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent {

  public editNev: string;
  public editTelefonszam: string;
  public editNem: string;
  public editSzuletesiDatum: string;
  public editLakhely: string;

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<EditPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editNev = data.name;
    this.editTelefonszam = data.telecom;
    this.editNem = data.gender;
    this.editSzuletesiDatum = data.birthdate;
    this.editLakhely = data.address;
  }

  updatePerson(): void {
    this.afs.collection('Person').doc(this.data.id).set({
      name: this.editNev,
      telecom: this.editTelefonszam,
      gender: this.editNem,
      birthdate: this.editSzuletesiDatum,
      address: this.editLakhely
    }).then(() => {
      console.log('Document successfully updated!');
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
    this.dialogRef.close();
  }

}
