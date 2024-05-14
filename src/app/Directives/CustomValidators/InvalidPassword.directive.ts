import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidPassword]',
  standalone: true,
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidPasswordDirective,
      multi: true
    }
  ]
})
export class InvalidPasswordDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // ensure control value is string
    if(typeof control.value == "string"){
      let input:string = control.value;
      let hasLowerCaseChar:boolean = new RegExp('[a-z]').test(input);
      let hasUpperCaseChar:boolean = new RegExp('[A-Z]').test(input);
      let hasSpecialChar:boolean = new RegExp('[[:punct:]]').test(input);
      if(!hasLowerCaseChar){
        return { 
          password:true, 
          passwordLower:true 
        }
      }else if(!hasUpperCaseChar){
        return { 
          password:true, 
          passwordUpper:true 
        }
      }else if(!hasSpecialChar){
        return { 
          password:true, 
          passwordSpecialChar:true 
        }
      }
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
