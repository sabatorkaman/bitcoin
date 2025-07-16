import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Api, CoinData} from '../api';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-coin2',
  imports: [TableModule, Button],
  templateUrl: './coin2.html',
  styleUrl: './coin2.scss',
  providers: [Api]

})
export class Coin2 implements OnInit {
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

  next() {
    console.log(this.offset)
    if (this.offset > this.total) {
    } else {
      this.offset += 5
    }
    this.api.getCoin(this.limit, this.offset)
      .subscribe(coin => {
        this.products = coin.data
        if (coin.data.length == this.limit)
          this.total = this.offset + this.limit + 1
        else this.total = this.offset + this.limit
      })
  }

  perv() {
    console.log(this.offset + 'perv')
    if (this.offset == 0) {
      alert("no product")
    } else {
      this.offset -= 5
    }
    this.api.getCoin(this.limit, this.offset)
      .subscribe(coin => {
        this.products = coin.data
        if (coin.data.length == this.limit)
          this.total = this.offset + this.limit + 1
        else this.total = this.offset + this.limit
      })
  }

  changeData(event: string) {
    if (event == "1") {
      this.offset = Number(event) - 1
      this.api.getCoin(this.limit, this.offset)
        .subscribe(coin => {
          this.products = coin.data
          if (coin.data.length == this.limit)
            this.total = this.offset + this.limit + 1
          else this.total = this.offset + this.limit
        })
    } else if (event == "2") {
      this.offset = Number(event) + 2
      console.log(this.offset)
      this.api.getCoin(this.limit, this.offset)
        .subscribe(coin => {
          this.products = coin.data
          if (coin.data.length == this.limit)
            this.total = this.offset + this.limit + 1
          else this.total = this.offset + this.limit
        })
    }
  }
}

