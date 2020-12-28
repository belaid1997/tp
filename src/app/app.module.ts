import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireStorageModule} from '@angular/fire/storage';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthService } from './service/auth.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
     AuthService,
     AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
