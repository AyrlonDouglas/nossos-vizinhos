import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBriefInformationComponent } from './card-brief-information.component';

describe('CardBriefInformationComponent', () => {
  let component: CardBriefInformationComponent;
  let fixture: ComponentFixture<CardBriefInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBriefInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBriefInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
