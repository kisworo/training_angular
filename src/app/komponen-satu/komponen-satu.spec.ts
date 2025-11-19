import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenSatu } from './komponen-satu';

describe('KomponenSatu', () => {
  let component: KomponenSatu;
  let fixture: ComponentFixture<KomponenSatu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KomponenSatu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenSatu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
