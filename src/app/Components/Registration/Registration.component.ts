import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillLevelButtonComponent } from '../SkillLevelButton/SkillLevelButton.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,SkillLevelButtonComponent
  ],
  templateUrl: './Registration.component.html',
  styleUrl: './Registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent { }
