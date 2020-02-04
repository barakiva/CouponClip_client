import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CouponApiService {
  readonly zomatoKey = "fa807880d0849e00e0765e0ee44622b0";
  readonly zomatoBaseUrl = "https://developers.zomato.com/api/v2.1/cities?q=paris";
  constructor(private http: HttpClient) { }

  getTest(){
    // const headers: HttpHeaders = new HttpHeaders({
    //   'Content-Type':  'application/json',
    //   'Authorization': this.zomatoKey
    // });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      });

    console.log(
      this.http.get(this.zomatoBaseUrl, headers );
    )
  }

}
