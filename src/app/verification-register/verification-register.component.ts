import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,  Router} from "@angular/router";
import {MembreService} from "../service/membre.service";
import {Membre} from "../models/Membre";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-verification-register',
  templateUrl: './verification-register.component.html',
  styleUrls: ['./verification-register.component.scss']
})
export class VerificationRegisterComponent implements OnInit {
membre: Membre;
  login: string;
  code: number;

  constructor(private route: ActivatedRoute,
              private  router: Router,
              private  membreService: MembreService,
              private  authService: AuthService,
              private localStorage: LocalStorage) { }

  ngOnInit(): void {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      this.login = params['login'];
      this.code = params['code'];
      console.log(this.login);
      console.log(this.code);

    });
  }

  onClick() {
    console.log('voir ce qui se passe');
    this.membreService.registractionConfirm(this.login, this.code).subscribe(res => {
    console.log(res);
    this.membre = res.body;
    let membre: Membre = {
      email: this.membre.email,
      password: localStorage.getItem('password'),
      type:'ME'
    };
    console.log(membre);
    if(res.body){
     this.authService.login(membre).subscribe(data => {
       localStorage.removeItem('password');
       console.log('auth ok');
       if (data){
         this.router.navigate(['accueil']);

       }
     });
    }
});
  }
}
