

import {Component} from "@angular/core";
import {Component, Provider, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";


export const NUMBER_FIELD_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberField),
    multi: true
};


@Component({
    selector: 'number-field',
    providers: [NUMBER_FIELD_CONTROL_VALUE_ACCESSOR],
    template: `<input value="numValue" (keydown)="onKeyDown(input.value)" #input>`
})
export class NumberField implements ControlValueAccessor {

    numValue = 0;

    private _onTouchedCallback =  (value:number) => {};

    private _onChangeCallback =  (value:number) => {};


    valueAccessor(): any { return this.numValue; };

    set value(v: any) {
        if (v !== this.numValue) {
            this.numValue = v;
            this._onChangeCallback(v);
        }
    }

    writeValue(value):void {
        this.numValue = value;
    }

    registerOnChange(callback) {
        this._onChangeCallback = callback;
    }

    registerOnTouched(callback) {
        this._onTouchedCallback = callback;
    }

}