import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillLevelButtonComponent } from '../SkillLevelButton/SkillLevelButton.component';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LoginDataService } from '../../../Services/LoginData.service';

@Component({
  selector: 'app-registration-skill-level',
  standalone: true,
  imports: [
    CommonModule,SkillLevelButtonComponent
  ],
  templateUrl: './RegistrationSkillLevel.component.html',
  styleUrl: './RegistrationSkillLevel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationSkillLevelComponent {
  private _skillLevel:BehaviorSubject<number>;
  SkillLevel:Observable<number>;
  UpdateSkillLevel(value:number){
    this._skillLevel.next(value);
  }
  constructor(private _registration:LoginDataService){
    this._skillLevel = new BehaviorSubject(-1);
    this.SkillLevel = this._skillLevel.asObservable();
    this._registration.UserData.pipe(
      map(value => value.SkillLevel)
    ).subscribe(value => this._skillLevel.next(value));
  }
  OnSubmit(){
    console.log("skill level submitted: " + this._skillLevel.value)
    this._registration.SkillLevel = this._skillLevel.value;
  }
 }
