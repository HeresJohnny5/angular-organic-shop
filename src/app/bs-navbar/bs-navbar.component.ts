// CORE MODULES
import { Component, OnInit } from '@angular/core';

// THIRD PARTY MODULES
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  public username: string = 'Username';

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(userData => {
      userData ? this.username = userData.displayName.split(' ')[0] : this.username = 'Username';
    });
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

}
