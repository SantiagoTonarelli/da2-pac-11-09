import { Component, OnInit } from '@angular/core';

import { BitcoinService } from '../service/bitcoin.service';

@Component({
  selector: 'bitcoin-search',
  templateUrl: './bitcoin-search.component.html',
  styleUrls: ['./bitcoin-search.component.css']
})
export class BitCoinSearchComponent implements OnInit {

  constructor(private bitcoinService:BitcoinService) { }

  ngOnInit(): void {
  }

  getBitcoinValue(){
    this.bitcoinService.getBitcoinValue();
  }
}
