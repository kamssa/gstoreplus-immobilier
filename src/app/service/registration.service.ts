import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Resultat} from "../models/resultat";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {environment} from "../../environments/environment";
import {Client} from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private clientCreerSource = new Subject<Resultat<Client>>();
  private clientModifSource = new Subject<Resultat<Client>>();
  private clientFiltreSource = new Subject<string>();
  private clientSupprimeSource = new Subject<Resultat<boolean>>();


// observables streams
  clientCreer$ = this.clientCreerSource.asObservable();
  clientModif$ = this.clientModifSource.asObservable();
  clientFiltre$ = this.clientFiltreSource.asObservable();
  clientSupprime$ = this.clientSupprimeSource.asObservable();

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  registraction(client: Client, action: string): Observable<Resultat<Client>> {
    console.log('methode du service qui inscrit  un client', client);
    return this.http.post<Resultat<Client>>(`${environment.apiUrl}/api/auth/registration/?action=${action}`, client);
  }
  registractionConfirm(login: string, code: number): Observable<Resultat<Client>> {
    console.log('methode du service qui ajoute un membre', login);
    return this.http.get<Resultat<Client>>(`${environment.apiUrl}/api/auth/registrationConfirm/?login=${login}&code=${code}`);
  }
  getClientByLogin(login: string): Observable<Resultat<Client>> {
    return this.http.get<Resultat<Client>>(`${environment.apiUrl}/api/auth/clientByLogin/${login}`);
  }
  getClientById(id: number): Observable<Resultat<Client>> {
    return this.http.get<Resultat<Client>>(`${environment.apiUrl}/api/auth/client/${id}`);
  }

  membreCreer(res: Resultat<Client>) {
    console.log('Membre a ete  creer correctement essaie source');
    this.clientCreerSource.next(res);
  }

  membreModif(res: Resultat<Client>) {
    this.clientModifSource.next(res);
  }

  filtreMembre(text: string) {
    this.clientFiltreSource.next(text);
  }
  private log(message: string) {
    this.messageService.add('clientService: ' + message);

  }
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  // recuper les erreurs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      this.log(`${operation} non disponible: ${error.message}`);


      return of(result as T);
    };
  }
}
