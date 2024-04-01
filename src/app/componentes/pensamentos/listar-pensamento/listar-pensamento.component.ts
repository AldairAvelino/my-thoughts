import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamento = [
    {
      conteudo: 'Conteudo 1',
      autoria: 'Aldair',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Conteudo 2',
      autoria: 'Aldair',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Conteudo 3',
      autoria: 'Aldair',
      modelo: 'modelo3'
    }
  ]

}
