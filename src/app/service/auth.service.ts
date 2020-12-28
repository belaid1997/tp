import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable <any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

   signUp(email: string, password: string) {
     this.firebaseAuth
          .createUserWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Registration Success : ', value);
          })
          .catch(err => {
             console.log('error : ', err.message);
          } );
   }

   login(email: string, password: string) {
     this.firebaseAuth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Connected Successfully : ', value);
          })
          .catch(err => {
             console.log('error : ', err.message);
          } );
   }

   logout() {
     this.firebaseAuth
          .signOut()
          .then(value => {
            console.log('Signed Out !!!!!!!! ');
          })
          .catch(err => {
             console.log('error : ', err.message);
          } );
   }
}
