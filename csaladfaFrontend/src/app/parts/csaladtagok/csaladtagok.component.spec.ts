import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaladtagokComponent } from './csaladtagok.component';

describe('CsaladtagokComponent', () => {
  let component: CsaladtagokComponent;
  let fixture: ComponentFixture<CsaladtagokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsaladtagokComponent]
    });
    fixture = TestBed.createComponent(CsaladtagokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
