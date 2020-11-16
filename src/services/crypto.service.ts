import { Injectable } from '@angular/core';
import { UrlService, URLS } from './url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(
              private http: HttpClient,
              private urlService: UrlService
    ) { }

  getCoinData(e) {
    const params = `?fsyms=${e}&tsyms=GBP&api_key=${URLS.API_KEY}`;
    return this.http
      .get(URLS.CRYPTO_COMPARE + params)
      .subscribe(data=>console.log(data))
  }
}

