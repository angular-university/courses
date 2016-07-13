
import {FormControl} from "@angular/forms";


export function checkIfTitleExists(ctrl: FormControl) {

    const valid = false;

    return valid ? null : {
        titleExists: {
            valid:false
        }
    };

}