import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { HttpClientService } from '../../Services/HttpClient.service';
import { BehaviorSubject, Observable, debounceTime, map, tap } from 'rxjs';

@Directive({
  selector: '[appEmailNotAvailable]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailNotAvailableDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class EmailNotAvailableDirective implements AsyncValidator {
  constructor(private _client:HttpClientService){}
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
    // ensure control value is string
    if(typeof control.value == "string"){
      // http get - is email already registered?
      return this._client.IsValidEmail(control.value).pipe(
        debounceTime(1000),
        // tap(value => console.log("valid: "+value)),
        map( value => value ? null : {'available':true} )
      );
    }   
    return new BehaviorSubject<ValidationErrors | null>(null).asObservable();
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
    // console.log("EmailNotAvailableDirective - registerOnValidatorChange method invoked");
  }
}
