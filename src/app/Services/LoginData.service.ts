import { Injectable } from '@angular/core';
import { NewUser } from '../Models/NewUser';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginCredentials } from '../Models/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor() 
  {
    this._confirmed = new BehaviorSubject<NewUser>(
      {
        Username: "",
        Password: "",
        Email: "",
        Theme: -1,
        Premium: false,
        Notify: false,
        SkillLevel: -1
      }
    )
    this._pending = new BehaviorSubject<NewUser>(
      {
        Username: "",
        Password: "",
        Email: "",
        Theme: -1,
        Premium: false,
        Notify: false,
        SkillLevel: 0
      }
    );
  }

  private _confirmed:BehaviorSubject<NewUser>;
  get Confirmed():Observable<NewUser>{
    return this._confirmed.asObservable();
  }

  private _pending:BehaviorSubject<NewUser>;
  get Pending():Observable<NewUser>{
    return this._pending.asObservable();
  }

  set Theme(value:number){
    const previousValue = this._pending.value;
    previousValue.Theme = value;
    this._pending.next(
      previousValue
    )
  }

  set SkillLevel(value:number){
    const previousValue = this._pending.value;
    previousValue.SkillLevel = value;
    this._pending.next(
      previousValue
    );
  }
  set Credentials(value:LoginCredentials){
    const previousValue = this._pending.value;
    previousValue.Email = value.email;
    previousValue.Password = value.password;
    this._pending.next(
      previousValue
    );
  }
  set Username(value:string){
    const previousValue = this._pending.value;
    previousValue.Username = value
    this._pending.next(
      previousValue
    );
  }
  set Notify(value:boolean){
    const previousValue = this._pending.value;
    previousValue.Notify = value
    this._pending.next(
      previousValue
    );
  }

  IsComplete():boolean{
    let confirmed:NewUser = this._confirmed.value;
    return confirmed.Email.length > 0 &&
            confirmed.Password.length > 0 &&
            confirmed.Username.length > 0 &&
            confirmed.SkillLevel >= 0 &&
            confirmed.Theme >= 0
  }

  Confirm(){
    // console.log("update confirmed values")
    this._confirmed.next(this._pending.value);
  }

}
