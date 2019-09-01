// CORE MODULES
import { Component, OnInit } from '@angular/core';

// THIRD PARTY MODULES
import * as moment from 'moment';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myDate: any;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.myDate = moment().format('YYYY');
  }

  submit(loginForm: any): void {
    console.log(loginForm);
  }

  login(): void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // this is for implementing OAuth and will redirect the user to one of the OAuth providers i.e. Google
  }

}
