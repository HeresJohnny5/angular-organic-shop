// CORE MODULES
import { Component, OnInit } from '@angular/core';

// THIRD PARTY MODULES
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  public user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(userData => this.user = userData);
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

}
