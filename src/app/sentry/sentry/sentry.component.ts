import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DealWrapper} from '../../model/deal-wrapper';
import {DealApiService} from '../../services/deal-api.service';

@Component({
  selector: 'app-sentry',
  templateUrl: './sentry.component.html',
  styleUrls: ['./sentry.component.scss']
})
export class SentryComponent implements OnInit {

  response: Observable<Observable<DealWrapper[]>>;
  constructor(private dealAPi: DealApiService) { }

  ngOnInit() {
  }

}
