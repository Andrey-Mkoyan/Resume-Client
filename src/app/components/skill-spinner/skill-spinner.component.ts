import { Skill } from './../../interface/skill';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-spinner',
  templateUrl: './skill-spinner.component.html',
  styleUrls: ['./skill-spinner.component.css']
})
export class SkillSpinnerComponent  {

  @Input() skill!:Skill
}
