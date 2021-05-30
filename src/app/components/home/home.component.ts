import {Component, OnInit} from '@angular/core';

export interface CustomCardList {
  name: string;
  img: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img2 =  '../../../assets/mickey.png';

  cardLists: CustomCardList[] = [
    {name: 'Fő oldal', img: '../../../assets/pluto.png'},
    {name: 'Személyek', img: '../../../assets/pluto.png'},
    {name: 'Készítő', img: '../../../assets/pluto.png'},
    {name: 'Bejelentkezés', img: '../../../assets/pluto.png'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
