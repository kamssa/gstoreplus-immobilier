import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TerrainService} from "../../service/terrain.service";
import {switchMap} from "rxjs/operators";
import {Terrain} from "../../models/Terrain";
import {MediaObserver} from "@angular/flex-layout";
import {FlashService} from "../../service/flash.service";
import {Subscription} from "rxjs";
import {FlashTerrain} from "../../models/FlashTerrain";

@Component({
  selector: 'app-detail-terrain',
  templateUrl: './detail-terrain.component.html',
  styleUrls: ['./detail-terrain.component.scss']
})
export class DetailTerrainComponent implements  OnInit, AfterViewInit, OnDestroy{
  terrain: Terrain;
  terrainId: number;
  value = 'Clear me';
  private mediaSub: Subscription;
  terrains: Terrain[];
  flasTerrains: FlashTerrain[];
  edit = false;
  constructor(private route: ActivatedRoute,
              private  router: Router,
              private terrainService: TerrainService,
              private cdRef: ChangeDetectorRef,
              private mediaObserver: MediaObserver,
              private flashService: FlashService, ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.terrainService.getTerrainById(+params.get('id')))
    ).subscribe(result => {
      this.terrain = result.body;
      this.terrainId = result.body.id;
      console.log('Voir le terrain ramené', this.terrain);
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
    this.router.navigate(['demande', id]);
  }
}
