

import {Observable} from "rxjs/Rx";


export class FirebasePage<T> {

  constructor(
      public pagedData: T[],
      public firstKey: string,
      public lastKey: string
  ) {

  }

}
