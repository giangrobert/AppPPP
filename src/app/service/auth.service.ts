import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
  import { from } from 'rxjs';
  import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public gian:AngularFireAuth) { }

  LoginEmail(email:string, password:string){
    return new Promise((resolve,reject)=>{
      this.gian.signInWithEmailAndPassword(email, password).then(userData=>resolve(userData), err=>reject(err))
    })
  }

  Logout(){
    return this.gian.signOut();
  }

//Verficador de logorarse
getAuth(){
  return this.gian.authState.pipe(map(auth=>auth));
}
}
