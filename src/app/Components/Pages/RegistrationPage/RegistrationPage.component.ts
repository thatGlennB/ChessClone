import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegistrationSkillLevelComponent } from '../../Elements/RegistrationSkillLevel/RegistrationSkillLevel.component';
import { RegistrationThemeComponent } from '../../Elements/RegistrationTheme/RegistrationTheme.component';
import { RegistrationEmailPasswordComponent } from '../../Elements/RegistrationEmailPassword/RegistrationEmailPassword.component';
import { LoginDataService } from '../../../Services/LoginData.service';
import { Observable, map, tap } from 'rxjs';
import { NewUser } from '../../../Models/NewUser';
import { RegistrationUsernameComponent } from '../../Elements/RegistrationUsername/RegistrationUsername.component';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    CommonModule,RegistrationSkillLevelComponent, RegistrationThemeComponent, RegistrationEmailPasswordComponent, NgSwitch, NgSwitchCase, RegistrationUsernameComponent
  ],
  templateUrl: './RegistrationPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {

  displayMode:Observable<number> = this._user.UserData.pipe(
    map<NewUser,number>(value => {
      if(value.SkillLevel < 0){
        return 0;
      } else if(value.Email == "" && value.Password == ""){
        return 1;
      } else if(value.Theme < 0){
        return 2;
      } else if(value.Username == ""){
        return 3;
      } else {
        return -1; 
      }
    }),
    tap(value => console.log(value))
  );
  constructor(private _user:LoginDataService){

  }
 }