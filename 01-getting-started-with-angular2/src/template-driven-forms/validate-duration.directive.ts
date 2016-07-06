
import {Directive, forwardRef} from "@angular/core";
import {Validator, FormControl, NG_VALIDATORS} from "@angular/forms";
import {validateDuration} from './validateDuration';


export const MIN_LENGTH_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationValidator),
    multi: true
};


@Directive({
    providers: [MIN_LENGTH_VALIDATOR],
    selector: '[duration][formControlName],[duration][formControl],[duration][ngModel]'
})
export class DurationValidator implements Validator {
    
    validate(c: FormControl): {[key: string]: any} { 
        return validateDuration(c); 
    }
    
}