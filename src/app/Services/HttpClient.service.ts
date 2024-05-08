import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const URL_DOMAIN:string = "http://localhost:5249/UserAccess"

@Injectable({
  providedIn: 'root'
})


export class HttpClientService {
  IsValidEmail(email:string):Observable<boolean>{
    let params = new HttpParams().set('email', email);
    return this._client.get<boolean>(`${URL_DOMAIN}/emailValid`, {params: params})
  }

  IsValidUsername(username:string):Observable<boolean>{
    let params = new HttpParams().set('username', username);
    return this._client.get<boolean>(`${URL_DOMAIN}/usernameValid`, {params: params});   
  }

  constructor(private _client:HttpClient) { }

}


// params = params.append('firstParameter', parameters.valueOne);
// params = params.append('secondParameter', parameters.valueTwo);