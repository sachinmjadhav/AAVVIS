import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
  apiKey: "AIzaSyAeXjbZWdBgio0mzlpcHK2uUchBoR2kQf8",
  authDomain: "aavis-cb3b4.firebaseapp.com",
  databaseURL: "https://aavis-cb3b4.firebaseio.com",
  projectId: "aavis-cb3b4",
  storageBucket: "aavis-cb3b4.appspot.com",
  messagingSenderId: "662591882488"
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
