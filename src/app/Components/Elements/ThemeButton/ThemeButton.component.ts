import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoginDataService } from '../../../Services/LoginData.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [
    CommonModule, NgIf
  ],
  templateUrl: './ThemeButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent { 
  @Input() TargetBackgroundImageSource:string="";
  @Input() TargetImageSource:string = "";
  @Input() TargetValue:number = -1;
  @Input() TargetLabel:string = "";
  ThemeSelected:Observable<boolean> = this._data.Pending.pipe(
    map(value => value.Theme == this.TargetValue)
  ) ;
  OnClick(){
    this._data.Theme = this.TargetValue;
  }
  constructor(private _data:LoginDataService){}
}
