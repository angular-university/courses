


import {Observable} from "rxjs/Rx";


export class FirebaseListRef<T> {

  constructor(
      public $key: string,
      public val: Observable<T>
  ) {

  }

}
