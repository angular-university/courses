import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {AuthInfo} from "../shared/security/auth-info";

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
    this.authService.logout();
  }


}
