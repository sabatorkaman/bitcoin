import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Api, CoinData} from '../api';
import {TableModule, TablePageEvent} from 'primeng/table';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-coin',
  imports: [TableModule, Button],
  templateUrl: './coin.html',
  styleUrl: './coin.scss',
  providers: [Api]

})
export class Coin implements OnInit {
  private api = inject(Api)
  private route = inject(ActivatedRoute)
  products!: CoinData[];
  total: number = 0
  limit: number = 5
  offset = 0


  ngOnInit() {
    this.api.getCoin(this.limit, this.offset)
      .subscribe(coin => {
        this.products = coin.data
        if (coin.data.length == this.limit)
          this.total = this.offset + this.limit + 1
        else this.total = this.offset + this.limit
      })
  }


  pageChange(event: TablePageEvent) {
    console.log(event)
    // this.offset += 5
    console.log(event)
    this.offset = event.first
    this.limit = event.rows
    this.api.getCoin(this.limit, this.offset)
      .subscribe(coin => {
        this.products = coin.data
        if (coin.data.length == this.limit)
          this.total = this.offset + this.limit + 1
        else this.total = this.offset + this.limit
      })
  }
}
