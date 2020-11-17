import { Injectable } from '@angular/core';
import { URLS, KEYS, ROUTES } from '../assets/enums';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  limit = 10;

  constructor(
              private http: HttpClient
    ) { }

  getCoinPrice(coinId: string, type: string) {
    let route: ROUTES;
    let plural = '';
    if (type === 'daily') {
      route = ROUTES.PRICE_HISTORY_TODAY;
    } else if (type === 'current') {
      plural = 's';
      route = ROUTES.PRICE_CURRENT ;
    }
    const params = `?fsym${plural}=${coinId}&tsym${plural}=GBP&api_key=${KEYS.API_KEY}&limit=${this.limit}`;
    try {
      return this.http
        .get(URLS.CRYPTO_COMPARE + route + params);
    } catch (e) {
      throw Error(e);
    }
  }


  getCoinExchange(coin) {
    const params = `?fsym=${coin}&tsym=GBP&e=Binance&api_key=${KEYS.API_KEY}&limit=${this.limit}`;
    return this.http
      .get(URLS.CRYPTO_COMPARE + ROUTES.EXCHANGE_HISTORY_TODY + params)
      .subscribe(data=>console.log(data))
  }
}

