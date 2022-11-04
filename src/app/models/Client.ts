import {Adresse} from "./Adresse";
import {Personne} from "./Personne";


export class Client extends Personne{
  constructor(public id ?: number,
              public version?: number,
              public titre?: string,
              public nom ?: string,
              public prenom ?: string,
              public login ?: string,
              public email ?: string,
              public telephone ?: string,
              public password ?: string,
              public repassword ?: string,
              public fonction ?: string,
              public nomComplet ?: string,
              public adresse ?: Adresse,
              public actived?: boolean,
              public  type?: string) {
    super(id, version, titre, nom, prenom, login, email, telephone, password, fonction, nomComplet, adresse, actived, type);
  }


}
