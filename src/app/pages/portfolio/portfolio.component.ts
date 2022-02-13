import { Card } from './../../interface/card';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit  {

  cards: Card[] = []

  constructor(private portfolioService: PortfolioService ) {};

  ngOnInit(): void {
    this.onGetCards()

  }

  onGetCards(): void {
    this.portfolioService.getCards().subscribe(
      (response) => {
        console.log(response)
        this.cards = response
      },
      (error: any) => console.log(error),
      () => console.log('Done getting cards'),
    )
  };
 }
