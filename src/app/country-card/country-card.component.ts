import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
  @Input()
  country: any;

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

    return dateNew;
  }
}
