import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coin2 } from './coin2';

describe('Coin2', () => {
  let component: Coin2;
  let fixture: ComponentFixture<Coin2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coin2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coin2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
