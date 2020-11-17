import { Injectable } from '@angular/core';
import { URLS, KEYS, ROUTES } from '../assets/enums';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(
              private http: HttpClient
    ) { }

  getCoinPrice(e) {
    const params = `?fsyms=${e}&tsyms=GBP&api_key=${KEYS.API_KEY}`;
    return this.http
      .get(URLS.CRYPTO_COMPARE + ROUTES.PRICE_CURRENT + params)
      .subscribe(data=>console.log(data))
  }
}

