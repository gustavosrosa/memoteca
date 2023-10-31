import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/models/pensamento.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = new Pensamento();

  constructor() {

  }

  ngOnInit() {
    this.initializeComponents();
  }

  initializeComponents() {
    this.pensamento.conteudo = "Aqui vai o conteúdo"
    this.pensamento.autoria = "Aqui vai a autoria"
  }

  salvar() {

  }

  /**
   * Limpa todo o conteúdo
   */
  cancelar() {
    this.pensamento = new Pensamento();
    this.initializeComponents();
  }

}
