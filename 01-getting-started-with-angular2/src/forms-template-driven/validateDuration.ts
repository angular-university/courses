
import {FormControl} from '@angular/forms';


export function validateDuration(ctrl: FormControl) {

    const valid = ctrl.value && parseInt(ctrl.value) && parseInt(ctrl.value) < 10;
    
    return valid ? null : {
        validateDuration: {
            valid:false
        }
    };
}