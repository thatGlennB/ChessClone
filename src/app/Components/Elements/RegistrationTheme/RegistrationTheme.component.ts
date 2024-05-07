import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeButtonComponent } from '../ThemeButton/ThemeButton.component';

@Component({
  selector: 'app-registration-theme',
  standalone: true,
  imports: [
    CommonModule, ThemeButtonComponent
  ],
  templateUrl: './RegistrationTheme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationThemeComponent { }
