import { Experience } from './../../interface/experience';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-lines',
  templateUrl: './experience-lines.component.html',
  styleUrls: ['./experience-lines.component.css']
})
export class ExperienceLinesComponent {

  @Input() experience!:Experience

}
