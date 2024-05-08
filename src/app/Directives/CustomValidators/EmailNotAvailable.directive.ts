import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { HttpClientService } from '../../Services/HttpClient.service';
import { BehaviorSubject, Observable } from 'rxjs';

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
    let output:BehaviorSubject<ValidationErrors | null> = new BehaviorSubject<ValidationErrors | null>(null);
    
    // if the control value is not a string, return null
    if(typeof control.value != "string"){
      return output.asObservable();
    }   

    // if the control value is not a valid email, return null
    let emailFormatTest:RegExp = new RegExp('^([a-zA-Z]|[0-9]|_|-|\.)*([a-zA-Z]|[0-9])+@([a-zA-Z]|[0-9]|-)+\.([a-zA-Z]){2,}$');
    if(!emailFormatTest.test(control.value)){
      return output.asObservable();
    }

    // http get - is email already registered?
    let result:Observable<boolean> = this._client.IsValidEmail(control.value);
    result.subscribe(value =>
      {
        console.log("EmailNotAvailableDirective - validate method: "+value);
        if(value){
          console.log("pass");
        } else{
          console.log("fail");
          output.next({emailNotAvailable:true});
        }
      }
    );
    return output.asObservable();
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
    // console.log("EmailNotAvailableDirective - registerOnValidatorChange method invoked");
  }
}
