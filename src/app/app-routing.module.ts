import { ContactComponent } from './pages/contact/contact.component';
import { InfoComponent } from './pages/info/info.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path:'main', component: MainComponent},
  {path:'skills', component: SkillsComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'info&facts', component: InfoComponent},
  {path:'contact', component: ContactComponent},
];



@NgModule({

  imports: [
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
