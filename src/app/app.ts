import {Component} from '@angular/core';
import {Coin2} from './coin2/coin2';
import {Coin} from './coin/coin';

// import {Coin} from './coin/coin';

@Component({
  selector: 'app-root',
  imports: [Coin2, Coin],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
