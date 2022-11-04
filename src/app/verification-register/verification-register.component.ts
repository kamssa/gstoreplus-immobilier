import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,  Router} from '@angular/router';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {AuthService} from '../service/auth.service';
import {Client} from '../models/Client';
import {RegistrationService} from "../service/registration.service";
import {LoginRequest} from "../models/loginRequest";

@Component({
  selector: 'app-verification-register',
  templateUrl: './verification-register.component.html',
  styleUrls: ['./verification-register.component.scss']
})
export class VerificationRegisterComponent implements OnInit {
  client: Client;
  login: string;
  code: number;
  values = '';
  email: string;
  constructor(private route: ActivatedRoute,
              private  router: Router,
              private registrationService: RegistrationService,
              private  authService: AuthService,
              private localStorage: LocalStorage) { }

  ngOnInit(): void {
    console.log('Called Constructor');
    this.login = localStorage.getItem('login');

  }
  onKey(event: any) { // without type info
    this.code = event.target.value;
    console.log(this.code);
  }
  onClick() {
    console.log('voir ce qui se passe');
    this.registrationService.registractionConfirm(this.login, this.code).subscribe(res => {
    console.log(res);
    this.client = res.body;
    const loginRequest: LoginRequest = {
      loginOrTelephone: this.client.login,
      password: localStorage.getItem('password'),
    };
    if (res.body){
     this.authService.login(loginRequest).subscribe(data => {
       localStorage.removeItem('password');
       localStorage.removeItem('login');
       console.log('auth ok');
       if (data){
         this.router.navigate(['accueil']);

       }
     });
    }
});
  }


}
