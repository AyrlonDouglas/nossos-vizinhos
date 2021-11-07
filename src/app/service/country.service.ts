import { formatDate } from '@angular/common';
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
    this.filtrarCountrys();
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
    // console.log(this.countrysFiltred);
  }

  dataFormatada(dataWithoutFormat: any) {
    let data = new Date(dataWithoutFormat);
    let day: any = data.getDate();
    day = `0${day}`;
    day = day.slice(-2);

    let month: any = data.getMonth() + 1;
    month = `0${month}`;
    month = month.slice(-2);

    let year = data.getFullYear();

    let dateNew = `${day}/${month}/${year}`;

    console.log(dateNew);
  }
}
