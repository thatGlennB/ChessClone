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
  set UserData(value: NewUser){
    this._user.next(value);
  }


}
