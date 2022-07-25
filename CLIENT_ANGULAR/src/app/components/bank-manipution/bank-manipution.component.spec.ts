import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankManiputionComponent } from './bank-manipution.component';

describe('BankManiputionComponent', () => {
  let component: BankManiputionComponent;
  let fixture: ComponentFixture<BankManiputionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankManiputionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankManiputionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
