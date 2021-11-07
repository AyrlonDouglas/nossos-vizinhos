import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countrys = [];

  constructor(public httpClient: HttpClient) {
    this.carregarCountrys();
  }
  async carregarCountrys() {
    const requisicao = await this.httpClient
      .get<any>('https://api.covid19api.com/summary')
      .toPromise();

    this.countrys = requisicao.Countries;
    console.log(this.countrys);
  }
}
