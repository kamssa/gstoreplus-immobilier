import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";
import {TerrainService} from "../service/terrain.service";
import {Terrain} from "../models/Terrain";
import {FlashService} from "../service/flash.service";
import {FlashTerrain} from "../models/FlashTerrain";
import {Router} from "@angular/router";
import {VilleService} from "../service/ville.service";
import {Ville} from "../models/Ville";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {Membre} from "../models/Membre";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, AfterViewInit, OnDestroy {
  value = 'Clear me';
  private mediaSub: Subscription;
  terrains: Terrain[];
  terrainsVille: Terrain[];
  flasTerrains: FlashTerrain[];
  villes: Ville[];
  edit: boolean;
  membre: Membre;
  public modeselect = 'Tous';
  villeId: any;

  constructor(private cdRef: ChangeDetectorRef,
              private mediaObserver: MediaObserver,
              private terrainService: TerrainService,
              private router: Router,
              private villeService: VilleService,
              private localStorage: LocalStorage,
              private flashService: FlashService) {
  }

  ngOnInit(): void {
 /*this.localStorage.getItem('membre').subscribe(data => {
 this.membre = data;
 });*/
    this.flashService.getAllFlashTerrain().subscribe(res => {
      this.flasTerrains = res.body;
      console.log(this.flasTerrains);

    });
    this.terrainService.getAllTerrain().subscribe(res => {
      this.terrains = res.body;
      console.log(res.body);
    });

    this.villeService.getAllVille().subscribe(res => {
      this.villes = res.body;
      console.log(this.villes);

    });
    /*this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change.mediaQuery);
      }
    );*/
    this.mediaSub = this.mediaObserver.asObservable().subscribe(change => {
      change.forEach((v) => {
        console.log(v.mediaQuery, v.mqAlias);
      });
    });
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();

  }

  ngOnDestroy(): void {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
  onDetail(id: number) {
 console.log('Voir id', id);
 this.router.navigate(['detail', id]);

  }

  changeVille(value: any) {
    console.log(value);
    if (value === 'tous'){
   this.terrainService.getAllTerrain().subscribe(data => {
  this.terrains = data.body;
     console.log(this.terrains);
});
    }else {
      this.terrainService.getTerrainByIdVille(value).subscribe(res => {
        this.terrains = res.body;
        console.log(this.terrains);
        this.villeId = value;

      });
    }

  }

  openTerrainVille() {
  if (this.villeId){
    this.router.navigate(['terrainVille', this.villeId]);
  }else {
    this.router.navigate(['allterrain']);
  }

  }
}
