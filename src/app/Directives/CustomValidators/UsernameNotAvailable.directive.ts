import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable, debounce, debounceTime, map, tap } from 'rxjs';
import { HttpClientService } from '../../Services/HttpClient.service';

@Directive({
  selector: '[appUsernameNotAvailable]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UsernameNotAvailableDirective,
      multi: true,
    }
  ],
  standalone: true,
})
export class UsernameNotAvailableDirective implements AsyncValidator {
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    
    
    // If control value is something other than string, return no errors
    if(typeof control.value == "string"){
      // Http-get request - check if username is available. If not, return error.
      return this._client.IsValidUsername(control.value).pipe(
        debounceTime(1000),
        tap(value => console.log("valid: "+value)),
        map(value => value ? null : {'available':true})
      );
    }
    
    
    return new BehaviorSubject<ValidationErrors | null>(null).asObservable();
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
  }
  constructor(private _client:HttpClientService){}
}
