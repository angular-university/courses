import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable, BehaviorSubject} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";
import {LessonsService} from "./lessons.service";
import {FirebasePage} from "./shared/model/firebase-page";
import {AuthInfo} from "./shared/security/auth-info";




@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);



  constructor(private af: AngularFire) {


  }

  login(email, password) {

    this.af.auth.login({email, password})
      .then(() => {
        this.authInfo$.next(new AuthInfo(this.af.auth.getAuth().uid));
      },
      err => {
        alert(`Could not login: ${err}`);
      });

  }

  logout() {
    this.af.auth.logout();
  }

}
