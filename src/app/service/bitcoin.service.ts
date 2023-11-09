import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getBitcoinValue(){
    this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json/")
    .subscribe(value => alert(JSON.stringify(value)))
  }
}
