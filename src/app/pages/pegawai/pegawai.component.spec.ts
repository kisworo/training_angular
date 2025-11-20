import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiComponent } from './pegawai.component';

describe('Pegawai', () => {
  let component: PegawaiComponent;
  let fixture: ComponentFixture<PegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegawaiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
