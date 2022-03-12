import { Skill } from './../../interface/skill';
import { SkillsService } from './../../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor( private skillsService:SkillsService ) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(
      (response) => {
        console.log(response)
        this.skills = response
      })
  }

}
