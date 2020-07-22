import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root'
})
export class DealApiService {
  // readonly BASE_URL = 'http://localhost:5000/api';
  readonly BASE_URL = 'https://515c552b-7f7c-4efb-99cb-4d9ad214ce89.mock.pstmn.io/stuff';
  // readonly BASE_URL = 'http://52.211.5.17/api';
  readonly PATH = "/location-and-query"

  subject: Subject<Deal[]> = new Subject();

  constructor(private client: HttpClient) { }


  makeRequest(couponForm: any) {
    console.log(couponForm.location);
    let params = new HttpParams()
      .set('location', couponForm.location)
      .set('query', couponForm.query);

    console.log(params.toString());

    const options = {params: params};

    this.client
      .get<Deal[]>(
      this.BASE_URL,
        options
      )
      .subscribe(data => {
       this.subject.next(data);
    });
  }




}
