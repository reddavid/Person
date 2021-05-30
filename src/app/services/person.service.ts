import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  @Output() userStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public auth: AngularFireAuth, private router: Router) {}

  async loginEmailPass(email: string, pw: string): Promise<any> {
    firebase.auth().signInWithEmailAndPassword(email, pw).then(() => {
      this.router.navigate(['/list-person']);
      this.userStatus.emit(true);
    });
  }

  async logout(): Promise<void> {
    await firebase.auth().signOut();
    this.userStatus.emit(false);
  }

  currentPersonObservable(): any {
    return this.auth.authState;
  }
}
