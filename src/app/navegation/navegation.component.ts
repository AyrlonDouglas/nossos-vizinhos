import { Component, Input } from '@angular/core';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss'],
})
export class NavegationComponent {
  constructor(public countryService: CountryService) {}
  teste() {
    console.log(this.countryService.countrysFiltred);
  }
}
