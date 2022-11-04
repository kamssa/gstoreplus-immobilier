import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {Client} from '../../models/Client';
import {RegistrationService} from '../../service/registration.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  butttonPrev: any;
  registryForm: FormGroup;
  private dialogConfig;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  error = '';
  client: Client;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private registrationService: RegistrationService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registryForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repassword: new FormControl('', [Validators.required]),
    });

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registryForm.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    if (this.registryForm.value.password !== this.registryForm.value.repassword){
      this.error = 'Vous devez remplir des mots de passe identiques';

    }else {
      let  client: Client = {
       nom: this.registryForm.value.nom,
       prenom: this.registryForm.value.prenom,
       login: this.registryForm.value.login,
       telephone: this.registryForm.value.telephone,
       password: this.registryForm.value.password,
       repassword: this.registryForm.value.repassword,
       type:'CL'
     };
     localStorage.setItem('login', this.registryForm.value.login);
     localStorage.setItem('password', this.registryForm.value.password);
     this.registrationService.getClientByLogin(client.login).subscribe(data => {
       if(data.body === null){
         this.registrationService.registraction(client, 'Register').subscribe(resultat => {
           if (resultat) {
             this.client = resultat.body;
             this.snackBar.open(' Merci pour votre inscription! verifiez votre boite mail ', '', {
               duration: 5000,
               horizontalPosition: this.horizontalPosition,
               verticalPosition: this.verticalPosition,

             });
           }

         });
         this.router.navigate(['verification']);
       }else {
         this.error = 'cet email est déjà utilisé';
       }
     });


    }


  }

}
