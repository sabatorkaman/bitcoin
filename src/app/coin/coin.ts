import {Component, inject, OnInit} from '@angular/core';
// import {Api} from '../api';
import {ActivatedRoute} from '@angular/router';
import {Api} from '../api';

@Component({
  selector: 'app-coin',
  imports: [],
  templateUrl: './coin.html',
  styleUrl: './coin.scss',
  providers: [Api]

})
export class Coin implements OnInit {
  private api = inject(Api)
  private route = inject(ActivatedRoute)
  products!: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
    this.api.getCoin()
      .subscribe(coin => {
        console.log(coin)
      })
  }
}
