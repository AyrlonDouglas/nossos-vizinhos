import { CountryService } from './../service/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  dataFormatada(dataWithoutFormat: any) {
    let data = new Date(dataWithoutFormat);
    let day: any = data.getDate();
    day = `0${day}`;
    day = day.slice(-2);

    let month: any = data.getMonth() + 1;
    month = `0${month}`;
    month = month.slice(-2);

    let year = data.getFullYear();

    let hour = data.getHours();
    let minutes = data.getMinutes();

    let dateNew = `${day}/${month}/${year} às ${hour}:${minutes}`;

    return dateNew;
  }

  constructor(public countryService: CountryService) {}
}
