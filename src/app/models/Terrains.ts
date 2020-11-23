import {Categorie} from './Categorie';
export class Terrains {
  constructor(public id ?: number,
              public version?: number,
              public libelle?: string,
              public description ?: string,
              public prix?: number,
              public path?: string,
              public categorie?: Categorie,
              public idClient?: number,
              public paye?: boolean,
              public abonneGeo?: boolean,
              public type?: string
  ) {
  }
}
