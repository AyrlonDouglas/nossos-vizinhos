import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { OutdorInitialComponent } from './outdor-initial/outdor-initial.component';
import { NavegationComponent } from './navegation/navegation.component';
import { CardBriefInformationComponent } from './card-brief-information/card-brief-information.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryCardComponent } from './country-card/country-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OutdorInitialComponent,
    NavegationComponent,
    CardBriefInformationComponent,
    CountryListComponent,
    CountryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
