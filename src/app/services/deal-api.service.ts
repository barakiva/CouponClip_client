import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root'
})
export class DealApiService {
  readonly BASE_URL = 'http://localhost:8080/api';
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
      this.BASE_URL + this.PATH,
        options
      )
      .subscribe(data => {
       this.subject.next(data);
    });
  }




}
