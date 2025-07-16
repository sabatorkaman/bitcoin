import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient)

  getCoin(): Observable<any> {
    return this.http.get<any>(`https://rest.coincap.io/v3/assets`, {
      headers: {'Authorization': 'Bearer 23c9c55988c3fb043c6ae0a38a6dffac79d8f03868dc9ebe2a33606ba536ca32'}
    });
  }
}
