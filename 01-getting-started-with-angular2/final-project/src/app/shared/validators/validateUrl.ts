



import {FormControl} from "@angular/forms";



export function validateUrl(ctrl: FormControl) {

  const urlValue = ctrl.value;

  const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(urlValue);

  return valid ? null : {
    validUrl: {
      valid:false
    }
  };

}
