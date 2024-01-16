import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjtagokComponent } from './ujtagok.component';

describe('UjtagokComponent', () => {
  let component: UjtagokComponent;
  let fixture: ComponentFixture<UjtagokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjtagokComponent]
    });
    fixture = TestBed.createComponent(UjtagokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
