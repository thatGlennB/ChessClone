import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { UsernameNotAvailableDirective } from '../../../Directives/CustomValidators/UsernameNotAvailable.directive';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginDataService } from '../../../Services/LoginData.service';

@Component({
  selector: 'app-registration-username',
  standalone: true,
  imports: [
    CommonModule,UsernameNotAvailableDirective,NgIf,FormsModule
  ],
  templateUrl: './RegistrationUsername.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationUsernameComponent {
  @ViewChild('usernameInput') usernameInput:NgModel | undefined;
  username:string = "";
  OnFormEntry(){
    if(!this.usernameInput){return}
    if(!this.usernameInput.invalid){
      console.log("username registered: "+this.username);
      this._data.Username = this.username;
    }
  }
  constructor(private _data:LoginDataService){}
 }
