

import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizationService} from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizationService) {

  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
