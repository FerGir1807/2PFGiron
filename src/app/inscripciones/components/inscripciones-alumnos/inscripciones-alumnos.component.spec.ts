import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesAlumnosComponent } from './inscripciones-alumnos.component';

describe('InscripcionesAlumnosComponent', () => {
  let component: InscripcionesAlumnosComponent;
  let fixture: ComponentFixture<InscripcionesAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
