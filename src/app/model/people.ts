export class People {
  name: string;
  lastName: string;
  edad: Number;
  biography: string;
  telefonos: string[];

  constructor(name: string, lastName: string, edad: Number, biography: string, telefonos: string[]) {
      this.name = name;
      this.lastName = lastName;
      this.edad = edad;
      this.biography = biography;
      this.telefonos = telefonos;
  }
}
