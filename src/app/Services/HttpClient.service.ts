import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

const URL_DOMAIN:string = "http://localhost:5249/UserAccess/"

@Injectable({
  providedIn: 'root'
})


export class HttpClientService {
  IsValidEmail(email:string):boolean{
    let params = new HttpParams().set('email', email);
    let result:boolean = false;
    this._client.get<boolean>(`${URL_DOMAIN}/emailValid`, {params: params})
    .pipe(
      tap(value => console.log(value))
    )
    .subscribe(value => 
      result = value
    );
    return result;
  }

  IsValidUsername(username:string){
    let params = new HttpParams().set('username', username);
    let result = this._client.get(`${URL_DOMAIN}/usernameValid`, {params: params});
    // console.log("API query usernameValid result: "+result);
    return result;
  }

  constructor(private _client:HttpClient) { }

}


// params = params.append('firstParameter', parameters.valueOne);
// params = params.append('secondParameter', parameters.valueTwo);