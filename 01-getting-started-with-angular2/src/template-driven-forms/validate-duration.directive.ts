
import {Directive} from "@angular/core";
import {Validator, FormControl} from "@angular/forms";
import {validateDuration} from './validateDuration';


@Directive({
    selector: '[duration][formControlName],[duration][formControl],[duration][ngModel]'
})
export class DurationValidator implements Validator {
    
    validate(c: FormControl): {[key: string]: any} { 
        return validateDuration(c); 
    }
    
}