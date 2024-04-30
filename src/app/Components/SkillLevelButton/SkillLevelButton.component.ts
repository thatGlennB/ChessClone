import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-level-button',
  standalone: true,
  imports: [
    CommonModule, NgIf
  ],
  templateUrl: './SkillLevelButton.component.html',
  styleUrl: './SkillLevelButton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillLevelButtonComponent {
  @Input() Title:string = "";
  @Input() Subtitle:string = "";
  @Input() IconClassValue:string ="fa-chess";
  IsClicked:boolean = false;
  OnClick():void{}
}
