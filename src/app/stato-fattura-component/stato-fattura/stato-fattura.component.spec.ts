import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoFatturaComponent } from './stato-fattura.component';

describe('StatoFatturaComponent', () => {
  let component: StatoFatturaComponent;
  let fixture: ComponentFixture<StatoFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatoFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatoFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
