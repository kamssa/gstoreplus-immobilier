import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Terrain} from "../models/Terrain";
import {Subscription} from "rxjs";
import {FlashTerrain} from "../models/FlashTerrain";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TerrainService} from "../service/terrain.service";
import {MediaObserver} from "@angular/flex-layout";
import {FlashService} from "../service/flash.service";
import {switchMap} from "rxjs/operators";
import {DemandeService} from "../service/demande.service";
import {Demande} from "../models/Demande";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  terrain: Terrain;
  terrainId: number;
  value = 'Clear me';
  private mediaSub: Subscription;
  terrains: Terrain[];
  demandes: Demande[];
  flasTerrains: FlashTerrain[];
  edit = false;
  constructor(private route: ActivatedRoute,
              private  router: Router,
              private demandeService: DemandeService,
              private cdRef: ChangeDetectorRef,
              private mediaObserver: MediaObserver,
              private flashService: FlashService, ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.demandeService.getDemandeByIdPersonne(+params.get('id')))
    ).subscribe(result => {
      this.demandes = result.body;
      console.log('Voir les demandes ramené', this.demandes);
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

  onDemande(id: number) {
   // this.router.navigate(['demande', id]);
  }
}
