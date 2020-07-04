import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {
  @Input() deal;
  readonly param = '?geometry=319x188F';
  reviews: number;
  ratings: number;

  constructor() {
    this.reviews = this.randomizeReviews();
    this.ratings = this.randomizeRating();
  }

  ngOnInit() {
  }
  public formatNumber(): string {
    return new Intl.NumberFormat('en-IN',
      {style: 'percent', minimumFractionDigits: 0}).format(this.deal.discountPercentage);
  }

  public randomizeReviews(): number {
    // console.log(Math.floor(this.randomIntFromInterval(1000,10000)));
    return Math.floor(this.randomIntFromInterval(1000,10000));
  }
  public randomizeRating(): number {
    return this.randomIntFromInterval(3,5);
  }
  public randomIntFromInterval(min, max): number {
    return Math.random() * (max - min + 1) + min;
  }
}
