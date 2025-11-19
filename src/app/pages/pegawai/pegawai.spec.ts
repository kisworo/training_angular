import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pegawai } from './pegawai';

describe('Pegawai', () => {
  let component: Pegawai;
  let fixture: ComponentFixture<Pegawai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pegawai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pegawai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
