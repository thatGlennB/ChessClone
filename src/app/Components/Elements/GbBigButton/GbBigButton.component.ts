import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'big-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './GbBigButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './GbBigButton.component.scss',
})
export class GbBigButtonComponent {
  @Input() maxWidth:number = 450;
  @Input() titleText:string = "";
  @Input() subtitleText:string = "";
  @Input() iconClassValue:string = "fa-chess"
  @Input() customClasses:Array<string> = [];
  @HostBinding('style.max-width.px') get maxWidthPx(){
    return this.maxWidth;
  }
 }
