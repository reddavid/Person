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

  public editVezeteknev: string;
  public editKeresztnev: string;
  public editTelefonszam: string;
  public editNem: string;
  public editSzuletesiDatum: string;
  public editLakhely: string;

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<EditPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editVezeteknev = data.vezeteknev;
    this.editKeresztnev = data.keresztnev;
    this.editTelefonszam = data.telefonszam;
    this.editNem = data.nem;
    this.editSzuletesiDatum = data.szuletesidatum;
    this.editLakhely = data.lakhely;
  }

  updatePerson(): void {
    this.afs.collection('Person').doc(this.data.id).set({
      vezeteknev: this.editVezeteknev,
      keresztnev: this.editKeresztnev,
      telefonszam: this.editTelefonszam,
      nem: this.editNem,
      szuletesidatum: this.editSzuletesiDatum,
      lakhely: this.editLakhely
    }).then(() => {
      console.log('Document successfully updated!');
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
    this.dialogRef.close();
  }

}
