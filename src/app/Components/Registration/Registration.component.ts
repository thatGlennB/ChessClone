import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegistrationSkillLevelComponent } from '../RegistrationSkillLevel/RegistrationSkillLevel.component';
import { RegistrationThemeComponent } from '../RegistrationTheme/RegistrationTheme.component';
import { RegistrationEmailPasswordComponent } from '../RegistrationEmailPassword/RegistrationEmailPassword.component';
import { LoginDataService } from '../../Services/LoginData.service';
import { Observable, map, tap } from 'rxjs';
import { NewUser } from '../../Models/NewUser';
import { RegistrationUsernameComponent } from '../RegistrationUsername/RegistrationUsername.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,RegistrationSkillLevelComponent, RegistrationThemeComponent, RegistrationEmailPasswordComponent, NgSwitch, NgSwitchCase, RegistrationUsernameComponent
  ],
  templateUrl: './Registration.component.html',
  styleUrl: './Registration.component.scss',
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
