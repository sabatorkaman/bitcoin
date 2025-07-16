import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient)

  getCoin(limit: number, offset: number): Observable<GetCoinResponse> {
    return this.http.get<GetCoinResponse>(`https://rest.coincap.io/v3/assets?limit=${limit}&offset=${offset}`, {
      headers: {'Authorization': 'Bearer 23c9c55988c3fb043c6ae0a38a6dffac79d8f03868dc9ebe2a33606ba536ca32'}
    });
  }
}

export interface GetCoinResponse {
  data: CoinData[]
}

export interface CoinData {
  changePercent24Hr: string,
  explorer: string,
  id: string
  marketCapUsd: string,
  maxSupply: string,
  name: string,
  priceUsd: string,
  rank: string,
  supply: string,
  symbol: string,
  tokens: {}
  volumeUsd24Hr: string,
  vwap24Hr: string
}
