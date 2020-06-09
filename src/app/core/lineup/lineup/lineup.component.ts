import { Component, OnInit } from '@angular/core';
import {DealApiService} from '../../../services/deal-api.service';
import {Observable} from 'rxjs';
import {DealWrapper} from '../../../model/deal-wrapper';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  hack = false;

  response: Observable<Observable<DealWrapper[]>>;
  deals = [];
  constructor(private dealAPi: DealApiService) { }

  ngOnInit() {
  }
  hackIt() {
    this.dealAPi.makeRequest().subscribe(data => {
      this.deals = data;
    });
    this.hack = true;
  }

}
