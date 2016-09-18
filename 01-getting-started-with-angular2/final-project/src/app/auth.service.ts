import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";
import {LessonsService} from "./lessons.service";
import {FirebasePage} from "./shared/model/firebase-page";
import {AuthInfo} from "./shared/security/auth-info";


@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$:BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);


  constructor(private af:AngularFire) {


  }

  login(email, password):Observable<any> {
    return this.fromFirebaseAuthPromise(this.af.auth.login({email, password}));
  }


  signUp(email, password) {
    return this.fromFirebaseAuthPromise(this.af.auth.createUser({email, password}));
  }


  logout() {
    this.af.auth.logout();
  }


  fromFirebaseAuthPromise(promise):Observable<any> {

    const subject = new Subject<any>();

    promise
      .then(() => {
          const authInfo = new AuthInfo(this.af.auth.getAuth().uid);
          this.authInfo$.next(authInfo);
          subject.next(authInfo);
          subject.complete();
        },
        err => {
          subject.error(err);
          subject.complete();
        });

    return subject;
  }

}
