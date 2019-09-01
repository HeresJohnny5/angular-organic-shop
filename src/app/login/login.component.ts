// CORE MODULES
import { Component, OnInit } from '@angular/core';

// THIRD PARTY MODULES
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myDate: any;

  constructor() { }

  ngOnInit() {
    this.myDate = moment().format('YYYY');
  }

  submit(loginForm: any): void {
    console.log(loginForm);
  }

}
