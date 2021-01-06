import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../models/Prospect';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {ProspectService} from "../../service/prospect.service";
import {Membre} from "../../models/Membre";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {MembreService} from "../../service/membre.service";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  butttonPrev: any;
  registryForm: FormGroup;
  private dialogConfig;
  membre: Membre;
  prospect: Prospect;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private membreService: MembreService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registryForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      email: '',
      password: '',
      adresse: this.formBuilder.group({
        telephone: ''
      })
    });

  }

  onSubmit() {
    console.log(this.registryForm.value);
    let  membre: Membre = {
      nom: this.registryForm.value.nom,
      prenom: this.registryForm.value.prenom,
      email: this.registryForm.value.email,
      password: this.registryForm.value.password,
      adresse: this.registryForm.value.adresse,
      type:'ME'
    };
    console.log('voir membre', membre);
    localStorage.setItem('email', this.registryForm.value.email);
    localStorage.setItem('password', this.registryForm.value.password);
    this.membreService.registraction(membre, 'Register').subscribe(resultat => {
      if (resultat) {
        this.prospect = resultat.body;
        this.snackBar.open(' Merci pour votre inscription! verifiez votre boite mail ', '', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,

        });
      }

    });
    this.router.navigate(['verification']);

  }

}
