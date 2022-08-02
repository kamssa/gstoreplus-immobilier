import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";
import {MembreService} from "../../service/membre.service";
import {Personne} from "../../models/Personne";
import {AuthService} from "../../service/auth.service";
import {Location} from '@angular/common';

declare interface RouteInfo {
  path: string;
  title: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/accueil', title: 'Accueil'},
  { path: '/apropos', title: 'A propos'},
  /*{ path: 'foncier', title: 'Foncier'},
  { path: 'immobilier', title: 'Immobilier'},*/
  { path: 'investissement', title: 'Investissement'},
  { path: '/blog', title: 'Blog'},
  { path: '/contact', title: 'Contact'},
  { path: '/connexion', title: 'Se connecter'}
  ];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: RouteInfo[];
  personne: Personne;
  nom: string;
  premierC: string;
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(private router: Router,
              private helper: JwtHelperService,
              private  membreService: MembreService,
              private  authService: AuthService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.myFunction);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems);
    //console.log(this.authService.isUserLoggedIn.value);

    this.authService.refreshNeeded.subscribe(() =>{
    this.getCurrentUser();

    });
    this.getCurrentUser();
  }
  getCurrentUser(){
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
  myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }


  ngAfterViewInit() {
    var a = document.getElementById('premier').children;
    for (let index = 0; index < this.menuItems.length; index++) {
      if (this.router.url === this.menuItems[index].path) {
        a[index].classList.add('active');
      }
    }
  }
  active(t: number) {
    var a = document.getElementById('premier').children;
    for (let i =0; i <a.length; i++) {
      a[i].classList.remove('active');
      if (t==i) {
        a[t].classList.add('active');
      }
    }
  }

  logout() {
    this.authService.logout();
    document.location.reload();

  }

  openDash(id: number) {
    console.log('id dans navbar', id);
    this.router.navigate(['dashboard', id]);
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    var $toggle = document.getElementsByClassName('navbar-toggler')[0];

    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const body = document.getElementsByTagName('body')[0];

    if (this.mobile_menu_visible == 1) {
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
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
   // this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }



}
