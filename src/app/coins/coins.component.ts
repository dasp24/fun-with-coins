import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
