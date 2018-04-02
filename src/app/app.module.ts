import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyDswAymP2lHroh-ST5lR9ppF1zhPoQU_oo",
  authDomain: "firestore-30e91.firebaseapp.com",
  databaseURL: "https://firestore-30e91.firebaseio.com",
  projectId: "firestore-30e91",
  storageBucket: "",
  messagingSenderId: "516474562746"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
