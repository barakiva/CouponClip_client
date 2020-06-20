import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DealWrapper} from '../../model/deal-wrapper';
import {DealApiService} from '../../services/deal-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sentry',
  templateUrl: './sentry.component.html',
  styleUrls: ['./sentry.component.scss']
})
export class SentryComponent implements OnInit {
  couponForm;

  constructor(
    private dealAPi: DealApiService,
    private formBuilder: FormBuilder
  ){
    this.couponForm = this.formBuilder.group({
      location: '',
      query: ''
    });
  }

  ngOnInit() {
  }
  onSearchSubmit(formData) {
    console.log("Your data is " + formData.query + " in " + formData.location);
    // this.couponForm = formData;
    this.dealAPi.makeRequest(formData);
  }
}
