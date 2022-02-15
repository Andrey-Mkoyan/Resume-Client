import { Card } from './../../interface/card';
import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {

  @Input() card!:Card

  getImgPath(url:any) {
    return url.replace('uploades\\','')
  }
}
