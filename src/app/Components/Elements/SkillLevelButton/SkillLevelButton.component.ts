import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { NewUser } from '../../../Models/NewUser';
import { RegistrationSkillLevelComponent } from '../RegistrationSkillLevel/RegistrationSkillLevel.component';

@Component({
  selector: 'app-skill-level-button',
  standalone: true,
  imports: [
    CommonModule, NgIf, RegistrationSkillLevelComponent
  ],
  templateUrl: './SkillLevelButton.component.html',
  styleUrl: './SkillLevelButton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillLevelButtonComponent {
  @Input() Title:string = "";
  @Input() Subtitle:string = "";
  @Input() IconClassValue:string ="fa-chess";
  @Input() TargetValue:number = -1;
  @Input() currentSkillLevel:Observable<number> = of(-1);
  @Output() skillLevelSelect = new EventEmitter<number>();

  IsClicked:boolean = false;
  OnClick():void{
    console.log("Skill level selected: " + this.TargetValue);
    this.skillLevelSelect.emit(this.TargetValue);
  }
}
