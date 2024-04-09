import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'big-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GbBigButtonComponent {
  @Input() maxWidth:number = 450;
  @Input() titleText:string = "";
  @Input() subtitleText:string = "";
  @Input() customClasses:Array<string> = [];
 }
