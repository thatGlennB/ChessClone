import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { LoginCredentials } from '../../../Models/LoginCredentials';
import { LoginDataService } from '../../../Services/LoginData.service';
import { EmailNotAvailableDirective } from '../../../Directives/CustomValidators/EmailNotAvailable.directive';

@Component({
  selector: 'app-registration-email-password',
  standalone: true,
  imports: [
    CommonModule, FormsModule, EmailNotAvailableDirective
  ],
  templateUrl: './RegistrationEmailPassword.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationEmailPasswordComponent {
  @ViewChild('emailInput') emailModel:NgModel | undefined;
  @ViewChild('passwordInput') passwordModel:NgModel | undefined;
  model:LoginCredentials = {email:"",password:""};
  OnChange(){
    console.log("change");
    if(!this.emailModel){ return };
    if(!this.passwordModel){ return};
    if(!this.emailModel.invalid && !this.passwordModel.invalid){ 
      console.log("credentials updated - email: "+this.model.email+" - password: "+this.model.password);
      this._data.Credentials = this.model;
    }
  }
  constructor(private _data:LoginDataService){}
}
