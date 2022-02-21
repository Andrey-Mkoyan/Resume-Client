import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from '../components/portfolio-card/portfolio-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    SkillsComponent,
    PortfolioComponent,
    MainComponent,
    InfoComponent,
    ExperienceComponent,
    ContactComponent,
    PortfolioCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class PagesModule { }
