import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personne} from '../models/Personne';
import {Resultat} from '../models/resultat';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private _refreshNeeded$ = new Subject<void>();
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get refreshNeeded(){
    return  this._refreshNeeded$;
  }
  public get currentUserValue(): Personne {
    return this.currentUserSubject.value;
  }

  login(client: Personne) {
    return this.http.post<Resultat<any>>(`${environment.apiUrl}/api/auth/signin`, client)
      .pipe(map(res => {
        console.log(res);
        localStorage.setItem('currentUser', JSON.stringify(res.body.body.accessToken));
        this.currentUserSubject.next(res.body.body.accessToken);
        this._refreshNeeded$.next();
        console.log(res.body.body.accessToken);
        return res;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this._refreshNeeded$.next();
  }
}
