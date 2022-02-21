import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../interface/skill';

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {

  transform(value: Skill[], flag: boolean): Skill[] {
    return value.filter(skill => {
      return skill.isAdditional === flag
    })
  }

}
