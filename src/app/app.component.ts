import {Component} from '@angular/core';
import {PersonService} from './services/person.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  belepve: boolean;
  title: string;

  constructor(public personService: PersonService, private router: Router) {
    this.personService.userStatus.subscribe(belep => this.belepve = belep);
  }

  logout(): void {
    this.personService.logout();
    this.router.navigateByUrl('/login');
  }

}
