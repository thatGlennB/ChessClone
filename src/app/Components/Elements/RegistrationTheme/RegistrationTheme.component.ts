import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registration-theme',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './RegistrationTheme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationThemeComponent { }
