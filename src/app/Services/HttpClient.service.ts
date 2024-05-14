import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { NewUser } from '../Models/NewUser';

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

  RegisterNewUser(data:NewUser):void{
    const body = {
      "userName": data.Username,
      "password": data.Password,
      "email": data.Email,
      "chessboardTheme": data.Theme,
      "premium": data.Premium,
      "notify": data.Notify
    };
    console.log("API request: register new user")
    this._client.post<any>(`${URL_DOMAIN}/register`,body)
    .subscribe((response) => {
      console.log(response)
    })
  }

  constructor(private _client:HttpClient) { }

}



function subscribe() {
  throw new Error('Function not implemented.');
}
// params = params.append('firstParameter', parameters.valueOne);
// params = params.append('secondParameter', parameters.valueTwo);