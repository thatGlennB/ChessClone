import { Injectable } from '@angular/core';
import { NewUser } from '../Models/NewUser';
import { BehaviorSubject, Observable } from 'rxjs';

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
      this._confirmed.value
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

  set SkillLevel(value:number){
    const previousValue = this._pending.value;
    previousValue.SkillLevel = value;
    this._pending.next(
      previousValue
    );
  }

  Confirm(){
    // console.log("update confirmed values")
    this._confirmed.next(this._pending.value);
  }

}
