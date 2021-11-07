import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countrys = [];
  countrysFiltred = [];

  constructor(public httpClient: HttpClient) {
    this.carregarCountrys();
  }
  async carregarCountrys() {
    const requisicao = await this.httpClient
      .get<any>('https://api.covid19api.com/summary')
      .toPromise();

    this.countrys = requisicao.Countries;
    this.countrysFiltred = requisicao.Countries.filter((v: any) => {
      if (
        v.CountryCode == 'BR' ||
        v.CountryCode == 'SR' ||
        v.CountryCode == 'GY' ||
        v.CountryCode == 'VE' ||
        v.CountryCode == 'CO' ||
        v.CountryCode == 'PE' ||
        v.CountryCode == 'BO' ||
        v.CountryCode == 'PY' ||
        v.CountryCode == 'AR' ||
        v.CountryCode == 'UY'
      ) {
        return true;
      } else return false;
    });
    console.log(this.countrysFiltred);
  }
}
