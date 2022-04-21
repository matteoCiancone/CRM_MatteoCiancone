import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComuniComponent } from './detail-comuni.component';

describe('DetailComuniComponent', () => {
  let component: DetailComuniComponent;
  let fixture: ComponentFixture<DetailComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
