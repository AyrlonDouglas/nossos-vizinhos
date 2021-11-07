import { CountryService } from './../service/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  constructor(public countryService: CountryService) {}
}
