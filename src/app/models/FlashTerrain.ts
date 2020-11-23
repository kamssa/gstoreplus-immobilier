import {Terrain} from './Terrain';
import {Categorie} from './Categorie';
import {Terrains} from './Terrains';

export class FlashTerrain extends Terrains{
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
  ){
    super(id, version, libelle, description, prix, path, categorie, idClient, paye, abonneGeo, type );
  }

}
