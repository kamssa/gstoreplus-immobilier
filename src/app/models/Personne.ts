import {Adresse} from "./Adresse";

export class Personne {
  constructor(public id?: number,
              public version?: number,
              public titre?: string,
              public nom?: string,
              public prenom?: string,
              public login?: string,
              public email?: string,
              public telephone?: string,
              public password?: string,
              public fonction?: string,
              public nomComplet?: string,
              public adresse?: Adresse,
              public actived?: boolean,
              public type?: string) {
  }
}
