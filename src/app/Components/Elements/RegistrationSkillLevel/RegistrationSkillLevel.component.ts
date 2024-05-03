import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillLevelButtonComponent } from '../SkillLevelButton/SkillLevelButton.component';
import { LoginDataService } from '../../../Services/LoginData.service';

@Component({
  selector: 'app-registration-skill-level',
  standalone: true,
  imports: [
    CommonModule,SkillLevelButtonComponent
  ],
  templateUrl: './RegistrationSkillLevel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationSkillLevelComponent {
  constructor(private _registration:LoginDataService){ }

  // TODO move this button to parent / separate module
  OnSubmit(){
    this._registration.Confirm();
  }
 }
