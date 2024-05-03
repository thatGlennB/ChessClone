import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillLevelButtonComponent } from '../SkillLevelButton/SkillLevelButton.component';

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
 }
