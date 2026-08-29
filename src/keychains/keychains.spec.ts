import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keychains } from './keychains';

describe('Keychains', () => {
  let component: Keychains;
  let fixture: ComponentFixture<Keychains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keychains],
    }).compileComponents();

    fixture = TestBed.createComponent(Keychains);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
