import { Component, OnInit } from '@angular/core';
import {Curso} from './Curso'
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Atributos
  private vetorCursos:Curso[];
  private curso:Curso;
  private id:number;


  // Construtor
  constructor(private servico:CursosService) { }

  ngOnInit() {
    this.id =  -1;
    this.curso = new Curso();
    this.vetorCursos = this.servico.listar();



  }
  // Cadastrar
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = new Curso();
  }

  // Excluir
  excluir(id:number){
    this.servico.exlcluir(id)
    this.id = -1;
  }

  // Editar
  editar(id:number){
    this.id =id;
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );
  }
  // Atualizar
  atualizar(id:number){
    this.servico.alterar(this.id, this.curso)
    this.curso = new Curso
    this.id = -1
    }

}
