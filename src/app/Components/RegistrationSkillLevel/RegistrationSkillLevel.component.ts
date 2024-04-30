import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registration-skill-level',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './RegistrationSkillLevel.component.html',
  styleUrl: './RegistrationSkillLevel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationSkillLevelComponent { }
