import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenDua } from './komponen-dua';

describe('KomponenDua', () => {
  let component: KomponenDua;
  let fixture: ComponentFixture<KomponenDua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KomponenDua]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenDua);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
