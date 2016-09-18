

import {Subject} from "rxjs/Rx";

export default function firebaseUpdateToObs(dbRef, data) {

  const subject = new Subject();

  dbRef.update(data)
    .then(
      val => {
        subject.next(val);
        subject.complete();
      },
      err => {
        subject.error(err);
        subject.complete();
      }
    );

  return subject.asObservable();

}
