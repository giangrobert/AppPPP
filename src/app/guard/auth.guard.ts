import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private afauth:AngularFireAuth, private servicio:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.servicio.gian.authState.pipe(
      take(1),
      map(authState=>!!authState),
      tap(logado=>{
        if(!logado){
            this.router.navigate(['/'])
        }
      })
    );
  }
}
