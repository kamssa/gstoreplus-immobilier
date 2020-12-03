import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Personne} from "../../models/Personne";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {AuthService} from "../../service/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {MembreService} from "../../service/membre.service";
import {DemandeService} from "../../service/demande.service";
declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;
  personne: Personne;
  nom: string;
  premierC: string;

  constructor(location: Location,  private element: ElementRef,
              private router: Router, private localStorage: LocalStorage,
              private  authService: AuthService,
              private  membreService: MembreService,
              private helper: JwtHelperService,
              private demandeService: DemandeService) {
    this.location = location;
    this.sidebarVisible = false;

  }

  ngOnInit(){
     const toggleButton = document.getElementsByClassName('navbar-toggler')[0];
     const navbarLink = document.getElementsByClassName('navbar-link')[0];
     toggleButton.addEventListener('click',() => {
     navbarLink.classList.toggle('active');
     });
    var $toggle = document.getElementsByClassName('navbar-toggler')[0];
    const body = document.getElementsByTagName('body')[0];

    if (this.mobile_menu_visible === 1) {
      // $('html').removeClass('nav-open');
      body.classList.remove('nav-open');
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function() {
        $toggle.classList.remove('toggled');
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function() {
        $toggle.classList.add('toggled');
      }, 430);

      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');


      if (body.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer);
      }else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function() {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function() { //asign a function
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        $layer.classList.remove('visible');
        setTimeout(function() {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;

    }
    if (localStorage.getItem('currentUser')) {
      let token = localStorage.getItem('currentUser');
      let decode = this.helper.decodeToken(token);
      console.log(' Dans la navbar', decode);
      this.membreService.getMembreById(decode.sub).subscribe(res => {
        console.log('admin', res.body);
        this.personne = res.body;
        this.nom = this.personne.nom;
        this.premierC = this.nom.substr(0, 1);
      });

    }
  }
  logout() {
  this.authService.logout();
  }

  openDash(id: number) {
  console.log('id dans navbar', id);
  this.router.navigate(['dashboard', id]);
  }
}
