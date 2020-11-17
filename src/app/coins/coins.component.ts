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

  form = new FormGroup({
    searchType: new FormControl('', Validators.required)
  });

  viewOption: string;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  callCoinService(e) {
    // here call the cryptoservice
    this.cryptoService.getCoinPrice(e, 'current')
        .subscribe(data=>console.log(data));
  }

  changeSearchType(e) {
    this.viewOption = e.target.value;
  }

  submit() {
    if (this.viewOption === 'current' || this.viewOption === 'daily' ) {
      this.cryptoService.getCoinPrice(this.selectedCoin, this.viewOption)
      .subscribe(data=>console.log(data));
    } else {
      this.cryptoService.getCoinExchange(this.selectedCoin);
    }
  }

}
