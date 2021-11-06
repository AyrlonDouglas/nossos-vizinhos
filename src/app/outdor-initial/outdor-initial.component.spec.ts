import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdorInitialComponent } from './outdor-initial.component';

describe('OutdorInitialComponent', () => {
  let component: OutdorInitialComponent;
  let fixture: ComponentFixture<OutdorInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdorInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdorInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
