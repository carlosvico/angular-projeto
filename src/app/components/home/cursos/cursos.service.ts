import { Injectable } from '@angular/core';
import { Curso } from './Curso';

// Acesso total do serviço
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // Construtor
  constructor() {}

  // Vetor de cursos
  private vetorCursos:Curso[] = [
    new Curso("Angular", 800, "Desenvolvimento"),
    new Curso("PHP", 590, "Desenvolvimento"),
    new Curso("Photoshop", 470, "Desing"),
  ]


  //Cadastro de cursos
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso);
  }


  //Seleção de cursos
  public listar(){
    return this.vetorCursos
  }


  //Alteração de Cursos
  public alterar(id:number, curso:Curso){
    this.vetorCursos[id] = curso;
  }

  //Exclusão de Cursos
  public exlcluir(id:number){
    this.vetorCursos.splice(id, 1);
  }
}
