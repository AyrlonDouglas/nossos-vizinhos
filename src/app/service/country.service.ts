import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countrys = [];
  countrysFiltred: any = [];
  global: any = [];

  constructor(public httpClient: HttpClient) {
    this.carregarCountrys();
  }
  async carregarCountrys() {
    const requisicao = await this.httpClient
      .get<any>('https://api.covid19api.com/summary')
      .toPromise();

    this.countrys = requisicao.Countries;
    this.global = requisicao.Global;
    this.filtrarCountrys();
  }
  alterarNomeVenezuela(array: []) {
    let countrys: any = array;
    for (let country of countrys) {
      if (country.CountryCode == 'VE') {
        country.Country = 'Venezuela';
      }
    }
    return countrys;
  }
  filtrarCountrys() {
    this.countrysFiltred = this.countrys.filter((v: any) => {
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
    this.countrysFiltred = this.alterarNomeVenezuela(this.countrysFiltred);
  }
}
