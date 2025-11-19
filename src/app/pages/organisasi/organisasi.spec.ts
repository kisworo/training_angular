import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Organisasi } from './organisasi';

describe('Organisasi', () => {
  let component: Organisasi;
  let fixture: ComponentFixture<Organisasi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Organisasi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Organisasi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
