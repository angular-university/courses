import { Component, OnInit } from '@angular/core';
import {AuthInfo} from "../shared/security/auth-info";
import {AuthService} from "../shared/security/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  authInfo: AuthInfo;

  constructor(private authService: AuthService) {


  }

  ngOnInit() {

    this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);


  }


  logout() {
    console.log('logout');
    this.authService.logout();
  }


}
