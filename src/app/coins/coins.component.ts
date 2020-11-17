import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { CryptoService } from '../../services/crypto.service';

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
  showGraph = false;

  form = new FormGroup({
    searchType: new FormControl('', Validators.required)
  });

  price: number;
  viewOption: string;
  data: any;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }


  changeSearchType(e) {
    this.viewOption = e.target.value;
  }

  submit() {
    this.showGraph = false;
    if (this.viewOption === 'current' || this.viewOption === 'daily' ) {
      this.cryptoService.getCoinPrice(this.selectedCoin, this.viewOption)
      .subscribe(data => {if (this.viewOption === 'daily') {this.showGraph = true; this.data = data; } else {
        this.price = data[this.selectedCoin].GBP;
      } });
    } else {
      this.cryptoService.getCoinExchange(this.selectedCoin)
        .subscribe(data => this.data = data);
    }
  }

}
