import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DealWrapper} from '../model/deal-wrapper';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root'
})
export class DealApiService {
  readonly BASE_URL = 'http://localhost:8080/api';
  readonly params = '/get-all-deals';

  constructor(private client: HttpClient) { }
  makeRequest(): Observable<Deal[]> {
    return this.client.get<Deal[]>(this.BASE_URL + this.params);
  }
}
