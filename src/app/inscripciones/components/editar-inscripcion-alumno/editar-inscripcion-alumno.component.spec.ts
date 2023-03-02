import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInscripcionAlumnoComponent } from './editar-inscripcion-alumno.component';

describe('EditarInscripcionAlumnoComponent', () => {
  let component: EditarInscripcionAlumnoComponent;
  let fixture: ComponentFixture<EditarInscripcionAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInscripcionAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInscripcionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
