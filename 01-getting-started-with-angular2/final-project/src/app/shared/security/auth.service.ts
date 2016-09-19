import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import {AuthInfo} from "./auth-info";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$:BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);


  constructor(private af:AngularFire, private router: Router) {

    this.af.auth.subscribe(val => console.log('auth state',val));

  }

  login(email, password):Observable<any> {
    return this.fromFirebaseAuthPromise(this.af.auth.login({email, password}));
  }


  signUp(email, password) {
    return this.fromFirebaseAuthPromise(this.af.auth.createUser({email, password}));
  }


  logout() {
    this.af.auth.logout();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
    this.router.navigate(['/home']);
  }

  /*
  *
  * This is just a demo on how we can 'Observify' any asynchronous interaction
  *
  *
  * */

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
