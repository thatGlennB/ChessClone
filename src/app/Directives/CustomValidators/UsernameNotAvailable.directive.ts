import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmailNotAvailableDirective } from './EmailNotAvailable.directive';
import { HttpClientService } from '../../Services/HttpClient.service';
import { TmplAstSwitchBlockCase } from '@angular/compiler';

@Directive({
  selector: '[appUsernameNotAvailable]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailNotAvailableDirective,
      multi: true,
    }
  ],
  standalone: true,
})
export class UsernameNotAvailableDirective implements AsyncValidator {
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let result:BehaviorSubject<ValidationErrors | null> = new BehaviorSubject<ValidationErrors | null>(null);
    
    // If control value is something other than string, return no errors
    if(typeof control.value != "string"){
      return result.asObservable();
    }
    
    // Http-get request - check if username is available. If not, return error.
    this._client.IsValidUsername(control.value).subscribe(value => {
      if(!value){
        result.next({'UsernameNotAvailable':!value})
      }
    });
    return result.asObservable();
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  constructor(private _client:HttpClientService){}
}
