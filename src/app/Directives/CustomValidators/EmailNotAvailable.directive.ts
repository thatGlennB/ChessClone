import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { HttpClientService } from '../../Services/HttpClient.service';

@Directive({
  selector: '[appEmailNotAvailable]',
  standalone: true,
})
export class EmailNotAvailableDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(typeof control.value != "string"){
      return null;
    } 
    let target:string = control.value;
    let result:boolean = this._client.IsValidEmail(target);
    if(result){
      return null;
    }
    let errors:ValidationErrors = {emailNotAvailable:true}
    return errors;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  constructor(private _client:HttpClientService){}
}


// providers: [
//   provide: NG_VALIDATORS,
//   useExisting: EmailNotAvailableDirective,
//   multi: true,
// ]
