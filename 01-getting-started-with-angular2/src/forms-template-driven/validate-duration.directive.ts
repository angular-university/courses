
import {Directive, forwardRef} from "@angular/core";
import {Validator, FormControl, NG_VALIDATORS} from "@angular/forms";
import {validateDuration} from "./validateDuration";


export const MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    multi:true,
    useExisting: forwardRef(() => DurationValidator)
};



@Directive({
    selector: '[duration][ngModel]',
    providers: [MIN_LENGTH_VALIDATOR]
})
export class DurationValidator implements Validator {


    validate(c: FormControl): {[key:string]:any} {
        return validateDuration(c);
    }

}