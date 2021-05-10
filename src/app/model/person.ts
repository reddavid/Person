export class Person {
  id: number;
  vezeteknev: string;
  keresztnev: string;
  telefonszam: string;
  nem: string;
  szuletesidatum: string;
  lakhely: string;


  constructor(vezeteknev: string, keresztnev: string,
              telefonszam: string, nem: string, szuletesidatum: string, lakhely: string) {
    this.vezeteknev = vezeteknev;
    this.keresztnev = keresztnev;
    this.telefonszam = telefonszam;
    this.nem = nem;
    this.szuletesidatum = szuletesidatum;
    this.lakhely = lakhely;
  }

}
