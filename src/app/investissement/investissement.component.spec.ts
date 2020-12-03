import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestissementComponent } from './investissement.component';

describe('InvestissementComponent', () => {
  let component: InvestissementComponent;
  let fixture: ComponentFixture<InvestissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
