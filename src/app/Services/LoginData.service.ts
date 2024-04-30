import { Injectable } from '@angular/core';
import { NewUser } from '../Models/NewUser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor() 
  {
    this._user = new BehaviorSubject<NewUser>(
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
  }

  private _user:BehaviorSubject<NewUser>
  get UserData():Observable<NewUser>{
    return this._user.asObservable();
  }

  set SkillLevel(value:number){
    const previousValue = this._user.value;
    previousValue.SkillLevel = value;
    this._user.next(
      previousValue
    );
  }

}
