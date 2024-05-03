import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registration-email-password',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './RegistrationEmailPassword.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationEmailPasswordComponent { }
