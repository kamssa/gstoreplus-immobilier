import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordOublierComponent } from './password-oublier.component';

describe('PasswordOublierComponent', () => {
  let component: PasswordOublierComponent;
  let fixture: ComponentFixture<PasswordOublierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordOublierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
