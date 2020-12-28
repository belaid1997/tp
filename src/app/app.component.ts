import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  email: string;
  password: string;

  constructor(public authService: AuthService){
    this.email = '';
    this.password = '';
  }

  signUp(){
    this.authService.signUp(this.email, this.password);
    this.email = this.password = '' ;
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '' ;
  }

  logout(){
    this.authService.logout();

  }
}
