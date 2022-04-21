import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatoFatturaComponent } from './edit-stato-fattura.component';

describe('EditStatoFatturaComponent', () => {
  let component: EditStatoFatturaComponent;
  let fixture: ComponentFixture<EditStatoFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStatoFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatoFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
