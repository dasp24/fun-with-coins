import { Component, OnInit } from '@angular/core';
import {CryptoService } from '../../services/crypto.service';

interface Coin {
  id: string;
  name: string;
}

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})

export class CoinsComponent implements OnInit {
  readonly coins: Coin[] = [{ id: 'BTC', name: 'Bitcoin' }, { id: 'ETH', name: 'Ethereum' }, { id: 'LTC', name: 'Litecoin' }];
  selectedCoin = '';
  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  callCoinService(e) {
    // here call the cryptoservice
    this.cryptoService.getCoinData(e);
  }

}
