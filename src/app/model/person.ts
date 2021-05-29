export class Person {
  id: number;
  name: string;
  telecom: string;
  gender: string;
  birthdate: string;
  address: string;


  constructor(name: string, telecom: string, gender: string, birthdate: string, address: string) {
    this.name = name;
    this.telecom = telecom;
    this.gender = gender;
    this.birthdate = birthdate;
    this.address = address;
  }

}
