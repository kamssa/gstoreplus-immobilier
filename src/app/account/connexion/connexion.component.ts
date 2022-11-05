import { Component, OnInit } from '@angular/core';
import {PasswordOublierComponent} from "../password-oublier/password-oublier.component";
import {Personne} from "../../models/Personne";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {ClientService} from "../../service/client.service";
import {LoginRequest} from "../../models/loginRequest";
import {RegistrationService} from "../../service/registration.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  submitted = false;
  loading = false;
  error = '';
  result: any;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  isuAth: boolean;
  hide = true;
  client: Personne;
  constructor( private fb: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private authService: AuthService,
               private registratioService: RegistrationService,
               public dialog: MatDialog,
               private  clientService: ClientService) { }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



// convenience getter for easy access to form fields
  get f() { return this.connexionForm.controls; }
  initForm(): void {
    this.connexionForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    if (navigator.onLine){
      this.submitted = true;
      // stop here if form is invalid
      const login = this.connexionForm.value.login;
      const password = this.connexionForm.value.password;

      const loginRequest: LoginRequest = {
        loginOrTelephone: login,
        password,
      };
          console.log(loginRequest);
          this.registratioService.getClientByLogin(login)
            .subscribe(res => {
  if(res.status === 0){
    this.loading = true;
    this.authService.login(loginRequest).subscribe(data => {
        if (data.status === 0 ){
          this.snackBar.open('Succès de la connexion!', '', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }else {
          this.isuAth = false;
        }
        this.router.navigate(['accueil']);
      },
      error => {
        this.loading = false;
        this.error = "E-mail ou mot de passe oublié! Réessayez svp";
      });

  }
            });


    }else {
      this.error = 'Vérifiez votre connexion internet s\'il vous plaît';
    }
  }

  passeOublie() {
    let dialogRef = this.dialog.open(PasswordOublierComponent, {
      width: '650px',
    });
  }
}
