import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HederComponent } from './heder/heder.component';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    FooterComponent,
    HederComponent,
    ComponentsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
