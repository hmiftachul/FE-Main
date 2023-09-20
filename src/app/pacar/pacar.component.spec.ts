import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacarComponent } from './pacar.component';

describe('PacarComponent', () => {
  let component: PacarComponent;
  let fixture: ComponentFixture<PacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
