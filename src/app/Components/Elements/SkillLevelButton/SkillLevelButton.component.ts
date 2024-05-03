import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { RegistrationSkillLevelComponent } from '../RegistrationSkillLevel/RegistrationSkillLevel.component';
import { LoginDataService } from '../../../Services/LoginData.service';

@Component({
  selector: 'app-skill-level-button',
  standalone: true,
  imports: [
    CommonModule, NgIf, RegistrationSkillLevelComponent
  ],
  templateUrl: './SkillLevelButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillLevelButtonComponent {
  @Input() Title:string = "";
  @Input() Subtitle:string = "";
  @Input() IconClassValue:string ="fa-chess";

  @Input() TargetValue:number = -1;
  thisSkillLevelSelected: Observable<boolean> = this._userData.Pending.pipe(
    map(value => value.SkillLevel == this.TargetValue)
  );

  OnClick():void{
    this._userData.SkillLevel = this.TargetValue;
  }
  constructor(private _userData:LoginDataService){}
}
