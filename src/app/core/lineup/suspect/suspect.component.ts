import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {
  @Input() deal;
  readonly param = '&geometry=300x200';
  trimmedDeal: any;
  constructor() { }

  ngOnInit() {
    // console.log(this.deal.discountPercentage);
    // console.log(new Intl.NumberFormat('en-IN',
    //   { style: 'percent', minimumFractionDigits: 0 }).format(this.deal.discountPercentage));

  }
  public formatNumber(): string {
    return new Intl.NumberFormat('en-IN',
      {style: 'percent', minimumFractionDigits: 0}).format(this.deal.discountPercentage);
  }

}
