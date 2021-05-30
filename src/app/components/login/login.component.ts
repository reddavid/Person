import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  hide = true;

  constructor(private personService: PersonService) {
  }

  loginWithEmail(): void {
    if (this.form.valid) {
      this.personService.loginEmailPass(this.form.value.email, this.form.value.password).then(() => {
        console.log('Successfully logged in!');
      }).catch((error) => {
        console.error('Error at login: ', error);
      });
    }
  }

}
