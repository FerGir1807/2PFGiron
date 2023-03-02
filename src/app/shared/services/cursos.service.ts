import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {

  private cursos: Curso[] = [];
  private cursos$: BehaviorSubject<Curso[]>
  constructor() {
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
    console.log("lista de cursos: ", this.cursos);
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  editarCurso(curso: Curso): void {
    let indice = this.cursos.findIndex(c => c.id == curso.id);

    if (indice > -1) {
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }

  }
  eliminarCurso(idCurso: string): void {
    let indice = this.cursos.findIndex(c => c.id === idCurso);

    if (indice > -1) {
      this.cursos.splice(indice, 1);
      this.cursos$.next(this.cursos);
    }

  }
}
